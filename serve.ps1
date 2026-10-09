$port = 8080
$root = if ($PSScriptRoot) { $PSScriptRoot } else { (Get-Location).Path }

# Check if already running on port 8080
try {
    $existing = Invoke-WebRequest -Uri "http://localhost:$port/" -UseBasicParsing -TimeoutSec 1 -ErrorAction SilentlyContinue
    if ($existing -and $existing.StatusCode -eq 200) {
        Write-Output "Portfolio server is already active and serving at http://localhost:$port/"
        Write-Output "Press Ctrl+C to close this launcher window (server continues in background)."
        while ($true) { Start-Sleep -Seconds 5 }
        exit 0
    }
} catch {
    # Port is free, continue
}

$mimeMap = @{
    ".html" = "text/html; charset=utf-8"
    ".css"  = "text/css; charset=utf-8"
    ".js"   = "application/javascript; charset=utf-8"
    ".json" = "application/json; charset=utf-8"
    ".png"  = "image/png"
    ".jpg"  = "image/jpeg"
    ".jpeg" = "image/jpeg"
    ".gif"  = "image/gif"
    ".svg"  = "image/svg+xml"
    ".ico"  = "image/x-icon"
}

$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")

try {
    $listener.Start()
    Write-Output "Static server listening at http://localhost:$port/"
    
    while ($listener.IsListening) {
        try {
            $context = $listener.GetContext()
            $request = $context.Request
            $response = $context.Response
            
            $rawPath = [System.Uri]::UnescapeDataString($request.Url.AbsolutePath)
            if ($rawPath -eq "/" -or [string]::IsNullOrWhiteSpace($rawPath)) {
                $rawPath = "/index.html"
            }
            
            $localPath = Join-Path $root ($rawPath.TrimStart('/').Replace('/', '\'))
            
            if (Test-Path $localPath -PathType Leaf) {
                $ext = [System.IO.Path]::GetExtension($localPath).ToLower()
                $mime = if ($mimeMap.ContainsKey($ext)) { $mimeMap[$ext] } else { "application/octet-stream" }
                
                $bytes = [System.IO.File]::ReadAllBytes($localPath)
                $response.ContentType = $mime
                $response.ContentLength64 = $bytes.Length
                $response.StatusCode = 200
                if ($request.HttpMethod -ne "HEAD") {
                    $response.OutputStream.Write($bytes, 0, $bytes.Length)
                }
            } else {
                $response.StatusCode = 404
                $notFound = [System.Text.Encoding]::UTF8.GetBytes("404 Not Found: $rawPath")
                $response.ContentType = "text/plain"
                $response.ContentLength64 = $notFound.Length
                if ($request.HttpMethod -ne "HEAD") {
                    $response.OutputStream.Write($notFound, 0, $notFound.Length)
                }
            }
            
            $response.OutputStream.Close()
        } catch {
            # Catch transient network / client abort errors and keep listener running
            Write-Output "Request error: $_"
        }
    }
} catch {
    Write-Output "Server error: $_"
} finally {
    $listener.Stop()
}
