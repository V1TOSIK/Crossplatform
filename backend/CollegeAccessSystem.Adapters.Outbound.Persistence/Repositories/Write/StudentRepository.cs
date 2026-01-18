using CollegeAccessSystem.Adapters.Outbound.Persistence.Context;
using CollegeAccessSystem.Core.Application.Ports;
using CollegeAccessSystem.Core.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace CollegeAccessSystem.Adapters.Outbound.Persistence.Repositories.Write;

public class StudentRepository : IStudentRepository
{
    private readonly CollegeAccessSystemContext _context;
    
    public StudentRepository(
        CollegeAccessSystemContext context)
    {
        _context = context;
    }

    public async Task<Student?> GetStudentAsync(int studentId, CancellationToken ct)
        => await _context.Students
            .Include(s => s.StudentVisits)
            .FirstOrDefaultAsync(s => s.Id == studentId, ct);
    
    public async Task AddStudentAsync(Student student, CancellationToken ct)
        =>  await _context.Students.AddAsync(student, ct);

    public void DeleteStudentAsync(Student student, CancellationToken ct)
        => _context.Remove(student);
}