using cw2_api;

var builder = WebApplication.CreateBuilder(args);
string? connString = builder.Configuration
   .GetConnectionString("mysqlConn");
TodosRepo repo = new TodosRepo(connString);
var app = builder.Build();

app.MapGet("/", () => "Hello World!");
app.MapGet("/api/todos", () => repo.GetAll());
app.MapGet("/api/todos/{id}", (int? id) => repo.GetById(id));
app.MapPost("/api/todos", (Todo todo) => repo.InsertTodo(todo));
app.MapDelete("/api/todos/{id}",
    (int? id) =>
    {
        return repo.DeleteTodo(id) ;
    });
app.Run();
