using Newtonsoft.Json;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;

namespace Dental_White.Moduls
{
    [Table("DOCTOR")]
    public class Doctor
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.None)] 
        public string Identificacion_Doctor { get; set; }
        [Required]
        public string Nombres { get; set; }
        [Required]
        public string Apellidos { get; set; }
        [Required]
        public string Telefono { get; set; }
        [Required]
        public string FechaNacimiento { get; set; }
        public string Telefono2 { get; set; }
        [Required]
        public int Edad { get; set; }
        public string Direccion { get; set; }

        
    }
}