using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Dental_White.Moduls;
using System;

namespace Dental_White.Controllers 
{
    [Route("api/[controller]")]
    [ApiController]
    public class PacienteController : ControllerBase
    {
        private readonly DentalWhiteContext _context;

        public PacienteController(DentalWhiteContext context)
        {
            _context = context;
            if(_context.Pacientes.Count() == 0)
            {
                _context.Pacientes.Add(new Paciente { TipoId = "C.C", Identificacion_Paciente = "1004279985", Nombres = "luis carlos", Apellidos = "Cerda ortiz", Direccion = "Villa catalina 2", Telefono="3003906802", FechaNacimiento = "23/05/1998", Edad=21  });
                _context.SaveChanges();
            }
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Paciente>>> GetPacientes()
        {
            return await _context.Pacientes.ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<Paciente>> PostPaciente(Paciente paciente){
            var pacienteItem = await _context.Pacientes.FindAsync(paciente.Identificacion_Paciente);
            if (pacienteItem != null)
            {
                return BadRequest();
            }else
            {
                _context.Pacientes.Add(paciente);
                await _context.SaveChangesAsync();
                return CreatedAtAction(nameof (GetPacienteItem), new {id = paciente.Identificacion_Paciente}, paciente);
            }
        }

        [HttpGet("{identificacion}")]
        public async Task<ActionResult<Paciente>> GetPacienteItem(string identificacion)
        {
            var pacienteItem = await _context.Pacientes.FindAsync(identificacion);
            if (pacienteItem == null)
            {
                return NotFound();
            }
            return pacienteItem;
        }

        [HttpPut("{cedula}")]
        public async Task<IActionResult> PutPacienteItem(string cedula, Paciente paciente){
            if (cedula != paciente.Identificacion_Paciente)
            {
                return BadRequest();
            }
            _context.Entry(paciente).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete("{cedula}")]
        public async Task<IActionResult> DeletePaciente(string cedula){
            var pacienteItem = await _context.Pacientes.FindAsync(cedula);
            if (pacienteItem == null)
            {
                return NotFound();
            }
            _context.Pacientes.Remove(pacienteItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}