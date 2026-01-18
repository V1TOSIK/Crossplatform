using CollegeAccessSystem.Core.Application.Projections;
using CollegeAccessSystem.Core.Domain.Entities;
using CollegeAccessSystem.Core.Domain.Enums;

namespace CollegeAccessSystem.Core.Application.Ports;

public interface IStudentReadRepository
{
    Task<List<StudentListItem>> GetAllStudentsAsync(CancellationToken ct);
    Task<List<StudentVisit>> GetVisitsByTypeAsync(VisitType visitType, CancellationToken ct);
}