using CollegeAccessSystem.Core.Domain.Entities;
using CollegeAccessSystem.Core.Domain.Enums;

namespace CollegeAccessSystem.Core.Application.Ports;

public interface IStudentRepository
{
    Task<Student?> GetStudentAsync(int studentId, CancellationToken ct);
    Task AddStudentAsync(Student student, CancellationToken ct);
    void DeleteStudentAsync(Student student, CancellationToken ct);
}