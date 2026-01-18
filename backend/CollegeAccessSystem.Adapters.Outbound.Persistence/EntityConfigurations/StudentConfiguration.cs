using CollegeAccessSystem.Core.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CollegeAccessSystem.Adapters.Outbound.Persistence.EntityConfigurations;

public class StudentConfiguration : IEntityTypeConfiguration<Student>
{
    public void Configure(EntityTypeBuilder<Student> builder)
    {
        builder.ToTable("students")
            .HasKey(x => x.Id);
            
        builder.Property(x => x.Id)
            .HasColumnName("id")
            .ValueGeneratedOnAdd();
            
        builder.Property(x => x.ExternalId)
            .HasColumnName("external_id")
            .IsRequired();
            
        builder.Property(x => x.FirstName)
            .HasColumnName("first_name")
            .IsRequired();
        
        builder.Property(x => x.LastName)
            .HasColumnName("last_name")
            .IsRequired();
        
        builder.Property(x => x.StudentCard)
            .HasColumnName("student_card")
            .IsRequired();
            
        builder.HasMany(x => x.StudentVisits)
            .WithOne()
            .IsRequired()
            .OnDelete(DeleteBehavior.Cascade);
    }
}