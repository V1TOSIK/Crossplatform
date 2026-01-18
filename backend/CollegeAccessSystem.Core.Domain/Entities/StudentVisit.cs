using CollegeAccessSystem.Core.Domain.Enums;

namespace CollegeAccessSystem.Core.Domain.Entities;

public class StudentVisit
{
    //For Ef Core
    private StudentVisit(){}
    
    public StudentVisit(
        DateTime visitDate,
        VisitType visitType)
    {
        VisitDate = visitDate;
        VisitType = visitType;
    }

    public int Id { get; set; }
    public DateTime VisitDate { get; }
    public VisitType VisitType { get; } // Enter / Exit

    public static StudentVisit AddVisit(DateTime visitDate, VisitType visitType)
    {
        return new StudentVisit(visitDate, visitType);
    }
}