using Newtonsoft.Json;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;

namespace Dental_White.Moduls
{
    [Table("PACIENTE")]
    public class Paciente 
    {
        [Key] 
        [DatabaseGenerated(DatabaseGeneratedOption.None)]
        public string Identificacion_Paciente { get; set; }
        [Required]
        public string Nombres { get; set; }
        [Required]
        public string Apellidos { get; set; }
        [Required]
        public string Telefono { get; set; }
        [Required]
        public string FechaNacimiento { get; set; }
        [Required]
        public string TipoId { get; set; }
        public string Direccion { get; set; }
        [Required]
        public int Edad { get; set; }

        public virtual List<Cita> Citas { get; set; }
        
    }
}