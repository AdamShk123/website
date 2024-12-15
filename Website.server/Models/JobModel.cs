using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace Website.server.Models;

public class JobModel
{
    public Int32 Id { get; set; }
    
    [MaxLength(50)]
    public String Title { get; set; }
    
    [MaxLength(150)]
    public String Details { get; set; }
    
    public DateTime StartDate { get; set; }
    
    public DateTime EndDate { get; set; }
    
    public Int32 Company { get; set; }
    
    public CompanyModel CompanyItem { get; set; }
}

public class CompanyModel
{
    public Int32 Id { get; set; }
    
    [MaxLength(50)]
    public String Company { get; set; }
    
    [MaxLength(50)]
    public String City { get; set; }
    
    [MaxLength(2)]
    public String State { get; set; }
}

public class JobContext(DbContextOptions<JobContext> options) : DbContext(options)
{
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<JobModel>().ToTable("Jobs", "dbo");
        modelBuilder.Entity<CompanyModel>().ToTable("Companies", "dbo");
        
        modelBuilder.Entity<JobModel>()
            .HasOne(e => e.CompanyItem)
            .WithMany()
            .HasForeignKey(e => e.Company)
            .HasPrincipalKey(e => e.Id);
    }
    
    public DbSet<JobModel> Jobs { get; set; }
    public DbSet<CompanyModel> Companies { get; set; }
}