using CollegeAccessSystem.Adapters.Outbound.Persistence.Context;
using CollegeAccessSystem.Core.Application.Ports;
using CollegeAccessSystem.Core.Application.Projections;
using CollegeAccessSystem.Core.Domain.Entities;
using CollegeAccessSystem.Core.Domain.Enums;
using Microsoft.EntityFrameworkCore;

namespace CollegeAccessSystem.Adapters.Outbound.Persistence.Repositories.Read;

public class StudentReadRepository : IStudentReadRepository
{
    private readonly CollegeAccessSystemContext _context;
    
    public StudentReadRepository(
        CollegeAccessSystemContext context)
    {
        _context = context;
    }
    
    public async Task<List<StudentListItem>> GetAllStudentsAsync(CancellationToken ct)
        => await  _context.Students
            .Select(s =>
                new StudentListItem(s.Id, s.FirstName, s.LastName, s.StudentCard))
            .ToListAsync(ct);
    
    public async Task<List<StudentVisit>> GetVisitsByTypeAsync(VisitType visitType, CancellationToken ct)
        => await _context.StudentVisits
            .Where(v => v.VisitType == visitType)
            .ToListAsync(ct);
}