# Reactivities

## some dotnet ef commands
### install
dotnet tool install --global dotnet-ef
### add migration
dotnet ef migrations add ActivityAttendee -p Persistence -s API
### remove migration
dotnet ef migrations remove -p Persistence -s API
### add project
dotnet new classlib -n Infrastructure
### add project to solution
dotnet sln add Infrastructure
### add refences to project
cd Infrastructure
dotnet add refernce ../Application



## run from cli
Get-ChildItem -Recurse -Filter *.csproj | ForEach-Object { dotnet clean $_.FullName } ; dotnet build
