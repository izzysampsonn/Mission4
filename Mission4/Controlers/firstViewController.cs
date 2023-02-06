using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission4.Controlers
{
    public class firstViewController : Controller
    {
        public IActionResult Index()
        {

            // throw an error
            //throw new IndexOutOfRangeException();

            return View();
        }

        public IActionResult Form()
        {
            return View();
        }
    }
}
