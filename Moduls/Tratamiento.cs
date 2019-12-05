using Newtonsoft.Json;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;

namespace Dental_White.Moduls
{
    [Table("TRATAMIENTO")]
    public class Tratamiento
    {
        [Key] 
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public string Codigo_Tratamiento { get; set; }
        public string Nombre { get; set; }
        public decimal Costo { get; set; }
    }
}