namespace CollegeAccessSystem.Core.Application.Projections;

public class StudentListItem
{
    public StudentListItem(
        int id,
        string firstName,
        string lastName,
        string studentCard)
    {
        Id = id;
        FirstName = firstName;
        LastName = lastName;
        StudentCard = studentCard;
    }

    public int Id { get; }
    public string FirstName { get; }
    public string LastName { get; }
    public string StudentCard { get; }
}