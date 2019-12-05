using Newtonsoft.Json;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System;
namespace Dental_White.Moduls
{
    [Table("CITA")]
    public class Cita
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string Fecha { get; set; }
        public virtual Paciente Paciente  {get; set; }
        public virtual Doctor Doctor { get; set; }
        public virtual Hora Hora { get; set; }

        
    }
}