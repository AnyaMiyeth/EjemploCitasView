using Newtonsoft.Json;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System;
namespace Dental_White.Moduls
{
    [Table("HORA")]
    public class Hora
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public string Horario { get; set; }

        public virtual List<Cita> Citas { get; set; }

    }
}