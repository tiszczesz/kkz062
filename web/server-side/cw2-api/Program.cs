var builder = WebApplication.CreateBuilder(args);
string? connString = builder.Configuration
   .GetConnectionString("mysqlConn");

var app = builder.Build();

app.MapGet("/", () => "Hello World!");

app.Run();
