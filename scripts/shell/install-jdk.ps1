Param(
    [Parameter(Position=0, mandatory=$true)]
    [string]$URL
)

Invoke-WebRequest -URI "https://7-zip.org/a/7zr.exe" -OutFile ".\download\7zr.exe"
Invoke-WebRequest -Uri $URL -OutFile ".\download\Open-JDK-19.0.9.zip"

