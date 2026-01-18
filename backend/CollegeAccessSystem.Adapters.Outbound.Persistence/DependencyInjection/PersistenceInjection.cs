using CollegeAccessSystem.Adapters.Outbound.Persistence.Context;
using CollegeAccessSystem.Adapters.Outbound.Persistence.Repositories.Read;
using CollegeAccessSystem.Adapters.Outbound.Persistence.Repositories.Write;
using CollegeAccessSystem.Core.Application.Ports;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace CollegeAccessSystem.Adapters.Outbound.Persistence.DependencyInjection;

public static class PersistenceInjection
{
    public static IServiceCollection AddPersistence(this IServiceCollection services, IConfiguration configuration)
    {
        services.AddDbContext<CollegeAccessSystemContext>(options =>
            options.UseNpgsql(configuration.GetConnectionString("Postgres")
        ));
    
        services.AddScoped<IStudentRepository, StudentRepository>();
        services.AddScoped<IStudentReadRepository, StudentReadRepository>();
    
        return  services;
    }
}