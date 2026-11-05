$session = New-Object Microsoft.PowerShell.Commands.WebRequestSession
$res = Invoke-WebRequest -Uri "https://bzhomefront.com/" -WebSession $session -UserAgent "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36"
Write-Output "Status: $($res.StatusCode)"
$res.Content | Out-File -FilePath "scratch_site.html" -Encoding utf8

