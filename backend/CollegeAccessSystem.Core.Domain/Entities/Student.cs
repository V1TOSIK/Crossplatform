using CollegeAccessSystem.Core.Domain.Enums;

namespace CollegeAccessSystem.Core.Domain.Entities;

public class Student
{
    // For Ef Core
    private Student(){}
    
    public Student(
        Guid externalId,
        string firstName,
        string lastName,
        string studentCard)
    {
        ExternalId =  externalId;
        FirstName = firstName;
        LastName = lastName;
        StudentCard = studentCard;
    }

    public int Id { get; set; }
    public Guid ExternalId { get; }
    public string FirstName { get; }
    public string LastName { get; }
    public string StudentCard { get; }
    
    private readonly List<StudentVisit> _studentVisits = new ();
    public IReadOnlyCollection<StudentVisit> StudentVisits => _studentVisits.AsReadOnly();

    public static Student Create(
        Guid externalId,
        string firstName,
        string lastName,
        string studentCard)
    {
        return new Student(externalId, firstName, lastName, studentCard);
    }

    public void AddVisit(DateTime visitDate, VisitType visitType)
    {
        var newVisit = new StudentVisit(visitDate, visitType);
        _studentVisits.Add(newVisit);
    }
}