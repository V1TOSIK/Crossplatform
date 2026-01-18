using Microsoft.Extensions.DependencyInjection;

namespace CollegeAccessSystem.Adapters.Inbound.Api.DependencyInjection;

public static class ApiInjection
{
    public static IServiceCollection AddApi(this IServiceCollection services)
    {
        services.AddControllers();
        services.AddApiSwagger();

        return services;
    }
}