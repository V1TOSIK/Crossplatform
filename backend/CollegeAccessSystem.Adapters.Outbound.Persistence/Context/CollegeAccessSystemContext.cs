using CollegeAccessSystem.Core.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace CollegeAccessSystem.Adapters.Outbound.Persistence.Context;

public class CollegeAccessSystemContext : DbContext
{
    public CollegeAccessSystemContext(DbContextOptions<CollegeAccessSystemContext> options)
    :  base(options) {}

    public DbSet<Student> Students { get; set; }
    public DbSet<StudentVisit> StudentVisits { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        
        modelBuilder.ApplyConfigurationsFromAssembly(typeof(CollegeAccessSystemContext).Assembly);
    }
}