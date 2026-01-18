using CollegeAccessSystem.Core.Domain.Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace CollegeAccessSystem.Adapters.Outbound.Persistence.EntityConfigurations;

public class StudentVisitConfiguration : IEntityTypeConfiguration<StudentVisit>
{
    public void Configure(EntityTypeBuilder<StudentVisit> builder)
    {
        builder.ToTable("student_visits")
            .HasKey(k => k.Id);
        
        builder.Property(k => k.Id)
            .HasColumnName("id")
            .ValueGeneratedOnAdd();
            
        builder.Property(x => x.VisitDate)
            .HasColumnName("visit_date")
            .IsRequired();
            
        builder.Property(x => x.VisitType)
            .HasColumnName("visit_type")
            .HasConversion<string>()
            .IsRequired();
    }
}