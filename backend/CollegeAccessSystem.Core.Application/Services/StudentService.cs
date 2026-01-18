using CollegeAccessSystem.Core.Application.Interfaces;
using CollegeAccessSystem.Core.Application.Ports;
using CollegeAccessSystem.Core.Application.Projections;
using Microsoft.Extensions.Logging;

namespace CollegeAccessSystem.Core.Application.Services;

public class StudentService : IStudentService
{
    private readonly IStudentRepository _studentRepository;
    private readonly IStudentReadRepository _studentReadRepository;
    private readonly ILogger<StudentService> _logger;

    public StudentService(
        IStudentRepository studentRepository,
        IStudentReadRepository studentReadRepository,
        ILogger<StudentService> logger)
    {
        _studentRepository = studentRepository;
        _studentReadRepository = studentReadRepository;
        _logger = logger;
    }
    // TODO (Vitos): Add methods
    public async Task<List<StudentListItem>> GetAllStudentsAsync(CancellationToken ct)
    {
        return await _studentReadRepository.GetAllStudentsAsync(ct);
    }
}