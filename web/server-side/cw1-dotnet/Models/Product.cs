using System.ComponentModel;

namespace cw1_dotnet;

public class Product
{
    public int Id { get; set; }
    
    [DisplayName("Podaj nazwę")]
    public string? Name { get; set; }
    
    [DisplayName("Podaj cenę")]
    public decimal? Price { get; set; }
    
    [DisplayName("Podaj datę")]
    public DateTime? Date { get; set; }
}
