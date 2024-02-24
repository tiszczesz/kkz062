using Microsoft.Data.Sqlite;

namespace cw1_dotnet;

public class ProductRepo
{
    private string? _connString;
    public ProductRepo(IConfiguration configuration){
        _connString = configuration.GetConnectionString("sqliteConn");
    }
    public List<Product> GetAll(){
        List<Product> products = new List<Product>();
        SqliteConnection connection = new SqliteConnection(_connString);
        string sql = "SELECT id,name,price,date FROM products";
        SqliteCommand command = connection.CreateCommand();
        command.CommandText = sql;
        connection.Open();
        SqliteDataReader rd = command.ExecuteReader();
        if(rd.HasRows){
            while(rd.Read()){
                int id = rd.GetInt32(0);
                string? name = rd.GetString(1);
                decimal? price = rd.GetDecimal(2);
                DateTime date = rd.GetDateTime(3);
                products.Add(new Product{Id=id,Name=name,Price=price,Date=date});
            }
        }
        connection.Close();
        return products;
    }

    public void DeleteProduct(int? id)
    {
        if(id==null) return;
        SqliteConnection connection = new SqliteConnection(_connString);
        SqliteCommand command = connection.CreateCommand();
        command.CommandText = $"DELETE FROM products WHERE id = {id}";
        connection.Open();
        command.ExecuteNonQuery();
        connection.Close();
        return;
    }
}
