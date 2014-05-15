using System.Web;
using System.Web.Mvc;

namespace MvcApplication2.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /

        public ActionResult Index()
        {
            return View();
        }

    }
}
