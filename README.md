# Reactivities

## some dotnet ef commands
dotnet tool install --global dotnet-ef
dotnet ef migrations add ActivityAttendee -p Persistence -s API
dotnet ef migrations remove -p Persistence -s API

Get-ChildItem -Recurse -Filter *.csproj | ForEach-Object { dotnet clean $_.FullName } ; dotnet build