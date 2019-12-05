using Dental_White.Moduls;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Dental_White.ViewModel
{
    public class CrearCitaRequest
    {
        public int Id { get; set; }
        [Required]
        public string Fecha { get; set; }
        [Required]
        public string Identificacion_Paciente { get; set; }
        [Required]
        public string Identificacion_Doctor { get; set; }
        [Required]
        public string Horario { get; set; }
    }

    public class ConsultarCitaResponse
    {
        public ConsultarCitaResponse(CitaView cita)
        {
            Cita = cita;
        }
        public CitaView Cita { get; set; }
    }
}
