using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Website.server.Models;

namespace Website.server.Controllers;

[ApiController]
[Route("/api/jobs")]
public class JobController(ILogger<JobController> logger, JobContext ctx) : ControllerBase
{
    [HttpGet(Name = "GetJobs")]
    public IEnumerable<JobModel> Get()
    {
        return ctx.Jobs
            .Include(e => e.CompanyItem)
            .OrderByDescending(e => e.StartDate)
            .ToList();
    }
}