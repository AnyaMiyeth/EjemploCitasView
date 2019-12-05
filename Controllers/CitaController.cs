using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Dental_White.Moduls;
using System.Data;
using System;
using Dental_White.ViewModel;
using Microsoft.AspNetCore.Http;
using System.Data.Common;
using Microsoft.Data.SqlClient;

namespace Dental_White.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CitaController : ControllerBase
    {
        private readonly DentalWhiteContext _context;

        public CitaController(DentalWhiteContext context)
        {
            _context = context;


        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Cita>>> GetCitas()
        {
            return await _context.Citas.ToListAsync();
        }


        [HttpPost]
        public async Task<ActionResult<Cita>> PostCita(CrearCitaRequest cita)
        {
            var doctor = await _context.Doctores.FindAsync(cita.Identificacion_Doctor);


            var paciente = await _context.Pacientes.FindAsync(cita.Identificacion_Paciente);
            var horario = await _context.Horas.FindAsync(cita.Horario);

            if (doctor == null)
            {
                ModelState.AddModelError("Doctor", "El valor del crédito debe ser menor a $100.000");
            }

            if (paciente == null)
            {
                ModelState.AddModelError("Paciente", "El valor del crédito debe ser menor a $100.000");
            }

            if (horario == null)
            {
                ModelState.AddModelError("Horario", "El valor del crédito debe ser menor a $100.000");
            }
            if (!ModelState.IsValid)
            {
                var problemDetails = new ValidationProblemDetails(ModelState)
                {
                    Status = StatusCodes.Status400BadRequest,
                };
                return BadRequest(problemDetails);
            }


            var citaNueva = new Cita
            {
                Doctor = doctor,
                Paciente = paciente,
                Hora = horario,
                Fecha = cita.Fecha
            };



            _context.Citas.Add(citaNueva);

            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetCitaAdo), new { id = cita.Id }, cita);
        }


        [HttpPost("old")]
        public async Task<ActionResult<Cita>> PostCita(Cita cita)
        {

            _context.Entry(cita.Paciente).State = EntityState.Unchanged;
            _context.Entry(cita.Doctor).State = EntityState.Unchanged;
            _context.Entry(cita.Hora).State = EntityState.Unchanged;


            _context.Citas.Add(cita);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetCitaAdo), new { id = cita.Id }, cita);

        }

        [HttpGet("{id}/ado")]
        public ActionResult<CitaView> GetCitaAdo(int id)
        {
            var cita = new CitaView();
            using (var command = _context.Database.GetDbConnection().CreateCommand())
            {
                command.CommandText = @"select c.Fecha, c.Id, d.Apellidos Doctor, p.Apellidos Paciente, '' Hora from cita c 
                        inner join doctor d on c.DoctorIdentificacion_Doctor =d.Identificacion_Doctor
                        inner join paciente p on c.PacienteIdentificacion_Paciente=p.Identificacion_Paciente
                        where c.id=@id";

                command.Parameters.Add(new SqlParameter("@id", id));
                _context.Database.OpenConnection();
                var respuesta = command.ExecuteReader();

                if (respuesta.HasRows)
                {
                    respuesta.Read();
                    cita.Fecha = respuesta[0].ToString();
                    cita.Id =(int)respuesta[1];
                    cita.Doctor = respuesta[2].ToString();
                    cita.Paciente = respuesta[3].ToString();
                    cita.Hora = respuesta[4].ToString();
                }
                else
                {
                    return NotFound();
                }
            }

            return cita;
        }

        [HttpGet("{id}/HasNoKey")]
        public ActionResult<CitaView> GetCitaHasNoKey(int id)
        {
            //
            FormattableString sql = @$"select c.Fecha, c.Id, d.Apellidos Doctor, p.Apellidos Paciente , '' Hora from cita c 
                        inner join doctor d on c.DoctorIdentificacion_Doctor =d.Identificacion_Doctor
                        inner join paciente p on c.PacienteIdentificacion_Paciente=p.Identificacion_Paciente
                        where c.id={id}";

            var cita = _context.CitaView.FromSqlInterpolated(sql).FirstOrDefault();

            if (cita == null)
            {
                return NotFound();
            }

            return cita;
        }

        [HttpGet("{id}/linq")]
        public async Task<ActionResult<CitaView>> GetCitaLinq(int id)
        {

            var cita = await _context.Citas
                .Include(c => c.Doctor).Include(c => c.Paciente)
                .Where(c => c.Id == id)
                .Select(c =>
                  new CitaView
                  {
                      Doctor = c.Doctor.Nombres + c.Doctor.Apellidos,
                      Paciente = c.Paciente.Apellidos + " " + c.Paciente.Nombres,
                      Hora = c.Hora.Horario,
                      Fecha = c.Fecha,
                      Id = c.Id
                  }
                ).FirstAsync();


            if (cita == null)
            {
                return NotFound();
            }

            return cita;
        }




        [HttpPut("{id}")]
        public async Task<IActionResult> PutCita(int id, Cita cita)
        {
            if (id != cita.Id)
            {
                return BadRequest();
            }
            _context.Entry(cita).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteCita(int id)
        {
            var citaItem = await _context.Citas.FindAsync(id);
            if (citaItem == null)
            {
                return NotFound();
            }
            _context.Citas.Remove(citaItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}