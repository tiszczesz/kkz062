﻿using MySql.Data.MySqlClient;

namespace cw2_api;

public class TodosRepo
{
    private string _connString;
    public TodosRepo(string connString)
    {
        _connString = connString;
    }
    public List<Todo> GetAll()
    {
        List<Todo> todos = new List<Todo>();
        MySqlConnection connection = new MySqlConnection(_connString);
        string sql = "SELECT id,name,description,isComplete FROM todos";
        MySqlCommand command = connection.CreateCommand();
        command.CommandText = sql;
        connection.Open();
        MySqlDataReader rd = command.ExecuteReader();
        if (rd.HasRows)
        {
            while (rd.Read())
            {
                todos.Add(new Todo
                {
                    Id = rd.GetInt32(0),
                    Name = rd.GetString(1),
                    Description = rd.GetString(2),
                    IsComplete = rd.GetBoolean(3)
                });
            }
        }
        connection.Close();
        return todos;
    }
    public void InsertTodo(Todo todo)
    {
        MySqlConnection connection = new MySqlConnection(_connString);
        MySqlCommand command = connection.CreateCommand();
        command.CommandText =
               $"INSERT INTO todos(name,description,isComplete)" +
        $" VALUES('{todo.Name}','{todo.Description}',{todo.IsComplete})";
        connection.Open();
        command.ExecuteNonQuery();
        connection.Close();
    }
}
