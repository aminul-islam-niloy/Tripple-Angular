using Microsoft.EntityFrameworkCore;

namespace Tripple_Angular.Models
{
    public class ApplicationDbContext:DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
           : base(options)
        {
        }

        public DbSet<Book> Books { get; set; }
    }
}
