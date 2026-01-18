namespace CollegeAccessSystem.Adapters.Inbound.Api.Contracts.Responses;

public class StudentResponse
{
    public StudentResponse(
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