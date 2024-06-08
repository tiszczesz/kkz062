using cw1_dotnet;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace MyApp.Namespace
{
    public class DeleteModel : PageModel
    {
        private ProductRepo _repo;
        
        public DeleteModel(IConfiguration config){            
            _repo = new ProductRepo(config);
        }
        public IActionResult OnGet(int? id)
        {
            //var Id = id;
            _repo.DeleteProduct(id);
            return RedirectToPage(nameof(Index));
        }
    }
}
