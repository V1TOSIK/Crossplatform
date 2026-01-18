namespace CollegeAccessSystem.Core.Application.Ports;

public interface IUnitOfWork
{
    Task SaveChangesAsync(CancellationToken cancellationToken);
    Task ExecuteInTransactionAsync(Func<Task> action, CancellationToken cancellationToken);
}