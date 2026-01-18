using CollegeAccessSystem.Adapters.Inbound.Api.Contracts.Responses;
using CollegeAccessSystem.Core.Application.Interfaces;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;


namespace CollegeAccessSystem.Adapters.Inbound.Api.Controllers;

[Route("api/v1/students")]
[ApiController]
public class StudentController : ControllerBase
{
    private readonly IStudentService _studentService;
    private readonly ILogger<StudentController> _logger;

    public StudentController(
        IStudentService studentService,
        ILogger<StudentController> logger)
    {
        _studentService = studentService;
        _logger = logger;
    }

    [HttpGet]
    public async Task<IActionResult> GetAllStudent(CancellationToken ct)
    {
        var result = await _studentService.GetAllStudentsAsync(ct);
        
        var response = result
            .Select(r => 
                new StudentResponse(
                    r.Id,
                    r.FirstName,
                    r.LastName,
                    r.StudentCard
                ))
            .ToList();
        
        return Ok(response);
    }
}