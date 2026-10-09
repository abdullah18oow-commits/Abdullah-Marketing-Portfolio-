@echo off
echo ========================================================
echo  Launching Creative Portfolio (Spencer Gabor Style)
echo ========================================================
echo.
echo Starting local web server at http://localhost:8080/ ...
start "" http://localhost:8080/
powershell -ExecutionPolicy Bypass -File "%~dp0serve.ps1"
pause
