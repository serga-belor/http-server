call build.bat || goto exit_error
node main.js
exit /B 0

:exit_error
@echo !!! Cannot run HTTP server
exit /B 1