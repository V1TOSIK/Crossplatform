using Microsoft.AspNetCore.Builder;

namespace CollegeAccessSystem.Adapters.Inbound.Api.Middleware;

public static class SwaggerMiddlewareInjection
{
    public static IApplicationBuilder UseApiSwagger(this IApplicationBuilder app)
    {
        app.UseSwagger();
        app.UseSwaggerUI(c =>
        {
            c.SwaggerEndpoint("/swagger/v1/swagger.json", "College Access System API v1");
            c.RoutePrefix = string.Empty;
            c.DocumentTitle = "College Access System API";
            c.DefaultModelsExpandDepth(-1);
            c.DisplayRequestDuration();
        });

        return app;
    }
}