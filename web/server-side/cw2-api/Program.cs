using cw2_api;

var builder = WebApplication.CreateBuilder(args);
string? connString = builder.Configuration
   .GetConnectionString("mysqlConn");
TodosRepo repo = new TodosRepo(connString);
var app = builder.Build();

app.MapGet("/", () => "Hello World!");
app.MapGet("/api/todos", () =>
{
    return Results.Ok(repo.GetAll());
});
app.MapGet("/api/todos/{id}", (int? id) =>
{
    var result = repo.GetById(id);
    return result != null ? Results.Ok(result) : Results.NotFound();
});
app.MapPost("/api/todos", (Todo todo) => {
    var result = repo.InsertTodo(todo);
    return result!=0? Results.Ok():Results.NotFound();
    });
app.MapDelete("/api/todos/{id}",
    (int? id) =>
    {
        return repo.DeleteTodo(id) != 0 ?
         Results.Ok() :
         Results.NotFound();
    });

app.MapPut("/api/todos/{id}",(int? id,Todo todo)=>{
    var result = repo.UpdateTodo(id,todo);
    return result>0 ?  Results.Ok() : Results.NotFound();
});
app.Run();
