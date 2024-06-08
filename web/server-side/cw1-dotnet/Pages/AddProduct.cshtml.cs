using cw1_dotnet;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace MyApp.Namespace
{
    public class AddProductModel : PageModel
    {
        private ProductRepo _repo;
        public AddProductModel(IConfiguration config){
            _repo = new ProductRepo(config);
        }
        [BindProperty]
        public Product NewProduct { get; set; }
        public void OnGet()
        {
        }
        public IActionResult OnPost(){
            if(ModelState.IsValid){
                //dodawanie do bazy danych
                _repo.AddNewProduct(NewProduct);
                return RedirectToPage(nameof(Index));
            }
            return Page();
        }
    }
}
