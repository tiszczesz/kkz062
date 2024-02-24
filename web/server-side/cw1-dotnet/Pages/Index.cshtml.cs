using cw1_dotnet;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace MyApp.Namespace
{
    
    public class IndexModel : PageModel
    {
        private ProductRepo _repo;
        
        [BindProperty]
        public List<Product> Products { get; set; }
        public IndexModel(IConfiguration configuration)
        {
            _repo = new ProductRepo(configuration);
        }
        public void OnGet()
        {
            Products = _repo.GetAll();
        }
    }
}
