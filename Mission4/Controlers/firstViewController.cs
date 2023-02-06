using Microsoft.AspNetCore.Mvc;
using Mission4.Models;
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

        [HttpGet]
        public IActionResult Form()
        {
            return View();
        }

        [HttpPost]
        // validate input
        public IActionResult Form(ValidateModel model)
        {
            return View();
        }

    }
}
