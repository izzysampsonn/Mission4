using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission4.Models
{
    public class ValidateModel
    {
        [Required]
        [Range(0, 100)]
        public int assignment { get; set; }

        [Required]
        [Range(0, 100)]
        public int projects { get; set; }

        [Required]
        [Range(0, 100)]
        public int quizzes { get; set; }

        [Required]
        [Range(0, 100)]
        public int midterm { get; set; }

        [Required]
        [Range(0, 100)]
        public int final { get; set; }

        [Required]
        [Range(0, 100)]
        public int intex { get; set; }

    }
}
