using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace Website.server.Models;

public class MessageModel
{
    public Int32 Id { get; set; }
    
    [MaxLength(50)]
    public required String Name { get; set; }
    
    [MaxLength(50)]
    public required String Email { get; set; }
    
    [MaxLength(1000)]
    public required String Message { get; set; }
    
    public DateTime Sent { get; set; }
};

public class MessageContext(DbContextOptions<MessageContext> options) : DbContext(options)
{
    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<MessageModel>()
            .ToTable("Messages", "dbo")
            .Property(e => e.Sent)
            .HasDefaultValueSql();
    }
    
    public DbSet<MessageModel> Messages { get; set; }
}
