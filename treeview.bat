@echo off
REM ======================================
REM TreeView - Create a directory tree report
REM ======================================

setlocal
set "target=%~1"
if "%target%"=="" set "target=%cd%"

set "output=%cd%\TreeReport.txt"

echo.
echo ===========================================
echo  Generating Directory Tree Report
echo  Target : %target%
echo  Output : %output%
echo ===========================================
echo.

REM Create the tree and save to file
tree "%target%" /f /a > "%output%"

echo.
echo Tree report successfully created!
echo Location: %output%
echo.

pause
endlocal
