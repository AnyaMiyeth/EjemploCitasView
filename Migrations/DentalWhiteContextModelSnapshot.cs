﻿// <auto-generated />
using Dental_White.Moduls;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace Dental_White.Migrations
{
    [DbContext(typeof(DentalWhiteContext))]
    partial class DentalWhiteContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("Dental_White.Moduls.Cita", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("DoctorIdentificacion_Doctor")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Fecha")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Horario")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("PacienteIdentificacion_Paciente")
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Id");

                    b.HasIndex("DoctorIdentificacion_Doctor");

                    b.HasIndex("Horario");

                    b.HasIndex("PacienteIdentificacion_Paciente");

                    b.ToTable("CITA");
                });

            modelBuilder.Entity("Dental_White.Moduls.Doctor", b =>
                {
                    b.Property<string>("Identificacion_Doctor")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Apellidos")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Direccion")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Edad")
                        .HasColumnType("int");

                    b.Property<string>("FechaNacimiento")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Nombres")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Telefono")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Telefono2")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Identificacion_Doctor");

                    b.ToTable("DOCTOR");
                });

            modelBuilder.Entity("Dental_White.Moduls.Hora", b =>
                {
                    b.Property<string>("Horario")
                        .HasColumnType("nvarchar(450)");

                    b.HasKey("Horario");

                    b.ToTable("HORA");
                });

            modelBuilder.Entity("Dental_White.Moduls.Paciente", b =>
                {
                    b.Property<string>("Identificacion_Paciente")
                        .HasColumnType("nvarchar(450)");

                    b.Property<string>("Apellidos")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Direccion")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("Edad")
                        .HasColumnType("int");

                    b.Property<string>("FechaNacimiento")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Nombres")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Telefono")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("TipoId")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Identificacion_Paciente");

                    b.ToTable("PACIENTE");
                });

            modelBuilder.Entity("Dental_White.Moduls.Tratamiento", b =>
                {
                    b.Property<string>("Codigo_Tratamiento")
                        .HasColumnType("nvarchar(450)");

                    b.Property<decimal>("Costo")
                        .HasColumnType("decimal(18,2)");

                    b.Property<string>("Nombre")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Codigo_Tratamiento");

                    b.ToTable("TRATAMIENTO");
                });

            modelBuilder.Entity("Dental_White.Moduls.Cita", b =>
                {
                    b.HasOne("Dental_White.Moduls.Doctor", "Doctor")
                        .WithMany()
                        .HasForeignKey("DoctorIdentificacion_Doctor");

                    b.HasOne("Dental_White.Moduls.Hora", "Hora")
                        .WithMany("Citas")
                        .HasForeignKey("Horario");

                    b.HasOne("Dental_White.Moduls.Paciente", "Paciente")
                        .WithMany("Citas")
                        .HasForeignKey("PacienteIdentificacion_Paciente");
                });
#pragma warning restore 612, 618
        }
    }
}
