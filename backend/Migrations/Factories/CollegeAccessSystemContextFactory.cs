using CollegeAccessSystem.Adapters.Outbound.Persistence.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace Migrations.Factories;

public class CollegeAccessSystemContextFactory 
    : IDesignTimeDbContextFactory<CollegeAccessSystemContext>
{
    public CollegeAccessSystemContext CreateDbContext(string[] args)
    {
        // зчитуємо конфіг з appsettings.json
        var configuration = new ConfigurationBuilder()
            .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), "../CollegeAccessSystem.Bootstrap"))
            .AddJsonFile("appsettings.json", optional: false)
            .Build();
        
        var optionsBuilder = new DbContextOptionsBuilder<CollegeAccessSystemContext>();
        optionsBuilder.UseNpgsql(configuration.GetConnectionString("Postgres"),
        npgsqlOptions => npgsqlOptions.MigrationsAssembly("Migrations"));

        return new CollegeAccessSystemContext(optionsBuilder.Options);
    }
}