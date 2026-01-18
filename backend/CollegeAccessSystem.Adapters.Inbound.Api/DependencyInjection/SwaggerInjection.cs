using Microsoft.Extensions.DependencyInjection;
using Microsoft.OpenApi.Models;

namespace CollegeAccessSystem.Adapters.Inbound.Api.DependencyInjection;

public static class SwaggerInjection
{
    public static IServiceCollection AddApiSwagger(this IServiceCollection services)
    {
        services.AddEndpointsApiExplorer();
        services.AddSwaggerGen(c =>
        {
            c.SwaggerDoc("v1", new OpenApiInfo
            {
                Version = "v1",
                Title = "College Access System API",
                Description = "API для контролю відвідуваності студентів",
                Contact = new OpenApiContact
                {
                    Name = "Vitos",
                    Email = "example@email.com"
                }
            });

            // Форматування enum як string
            c.UseInlineDefinitionsForEnums();

            // Опціонально: коментарі XML
            var xmlFile = $"{System.Reflection.Assembly.GetExecutingAssembly().GetName().Name}.xml";
            var xmlPath = Path.Combine(AppContext.BaseDirectory, xmlFile);
            if (File.Exists(xmlPath))
                c.IncludeXmlComments(xmlPath);

            // Прикраса UI
            c.CustomSchemaIds(type => type.FullName);
        });

        return services;
    }
}