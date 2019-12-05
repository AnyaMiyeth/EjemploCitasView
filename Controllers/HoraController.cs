using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Dental_White.Moduls;
namespace Dental_White.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HoraController : ControllerBase
    {
        private readonly DentalWhiteContext _context;

        public HoraController(DentalWhiteContext context){
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Hora>>> GetHoras()
        {
            return await _context.Horas.ToListAsync();
        }

        [HttpGet("{hora}")]
        public async Task<ActionResult<Hora>> GetHoraItem(string hora)
        {
            var horaItem = await _context.Horas.FindAsync(hora);
            if (horaItem == null)
            {
                return NotFound();
            }
            return horaItem;
        }

        [HttpPost]
        public async Task<ActionResult<Hora>> PostHora(Hora hora){
            _context.Horas.Add(hora);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof (GetHoraItem), new {id = hora.Horario}, hora);
        }

        [HttpPut("{horario}")]
        public async Task<IActionResult> PutHora(string horario, Hora hora){
            if (horario != hora.Horario)
            {
                return BadRequest();
            }
            _context.Entry(hora).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete("{horario}")]
        public async Task<IActionResult> DeleteHora(string horario){
            var horaItem = await _context.Horas.FindAsync(horario);
            if (horaItem == null)
            {
                return NotFound();
            }
            _context.Horas.Remove(horaItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}