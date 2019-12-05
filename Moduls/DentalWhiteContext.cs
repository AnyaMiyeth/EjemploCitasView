using Dental_White.ViewModel;
using Microsoft.EntityFrameworkCore;
namespace Dental_White.Moduls
{
    public class DentalWhiteContext : DbContext
    {
        public DentalWhiteContext(DbContextOptions<DentalWhiteContext> options):
        base(options)
        {

        }
        public DbSet<Paciente> Pacientes { get; set; }
        public DbSet<Tratamiento> Tratamientos { get; set; }
        public DbSet<Hora> Horas {get; set; }
        public DbSet<Doctor> Doctores { get; set; }
        public DbSet<Cita> Citas { get; set; }

        #region View
        public DbSet<CitaView> CitaView { get; set; }
        #endregion

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<CitaView>().HasNoKey();
        }

    }
}