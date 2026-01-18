using CollegeAccessSystem.Core.Application.Projections;

namespace CollegeAccessSystem.Core.Application.Interfaces;

public interface IStudentService
{
    Task<List<StudentListItem>> GetAllStudentsAsync(CancellationToken ct);
}