node ..\build\build.js || goto exit_error
exit /B 0

:exit_error
@echo !!! Build failed
exit /B 1