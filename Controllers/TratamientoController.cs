using System.Linq;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Dental_White.Moduls;
namespace Dental_White.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TratamientoController : ControllerBase
    {
        private readonly DentalWhiteContext _context;

        public TratamientoController(DentalWhiteContext context){
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Tratamiento>>> GetTratamientos()
        {
            return await _context.Tratamientos.ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<Tratamiento>> PostTratamiento(Tratamiento newTratamiento){
            var tratamientoItem = await _context.Tratamientos.FindAsync(newTratamiento.Codigo_Tratamiento);
            if (tratamientoItem != null)
            {
                return BadRequest();
            }
            else
            {
                _context.Tratamientos.Add(newTratamiento);
                await _context.SaveChangesAsync();
                return CreatedAtAction(nameof (GetTratamientoItem), new {id = newTratamiento.Codigo_Tratamiento}, newTratamiento);
            }
            
        }

        [HttpGet("{codigo}")]
        public async Task<ActionResult<Tratamiento>> GetTratamientoItem(string codigo)
        {
            var tratamientoItem = await _context.Tratamientos.FindAsync(codigo);
            if (tratamientoItem == null)
            {
                return NotFound();
            }
            return tratamientoItem;
        }

        [HttpPut("{codigo}")]
        public async Task<IActionResult> PutTratamiento(string codigo, Tratamiento tratamiento){
            if (codigo != tratamiento.Codigo_Tratamiento)
            {
                return BadRequest();
            }
            _context.Entry(tratamiento).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete("{codigo}")]
        public async Task<IActionResult> DeleteTratamiento(string codigo){
            var tratamientoItem = await _context.Tratamientos.FindAsync(codigo);
            if (tratamientoItem == null)
            {
                return NotFound();
            }
            _context.Tratamientos.Remove(tratamientoItem);
            await _context.SaveChangesAsync();

            return NoContent();
        }
    }
}