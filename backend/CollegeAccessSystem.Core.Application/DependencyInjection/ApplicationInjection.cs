using CollegeAccessSystem.Core.Application.Interfaces;
using CollegeAccessSystem.Core.Application.Services;
using Microsoft.Extensions.DependencyInjection;

namespace CollegeAccessSystem.Core.Application.DependencyInjection;

public static class ApplicationInjection
{
    public static IServiceCollection AddApplication(this IServiceCollection services)
    {
        services.AddScoped<IStudentService, StudentService>();
        return services;
    }
}