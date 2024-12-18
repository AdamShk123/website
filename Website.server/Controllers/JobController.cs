using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Website.server.Models;

namespace Website.server.Controllers;

[ApiController]
[Route("/api/jobs")]
public class JobController(JobContext ctx) : ControllerBase
{
    [HttpGet]
    public ActionResult<List<JobModel>> Get()
    {
        return ctx.Jobs
            .Include(e => e.CompanyItem)
            .OrderByDescending(e => e.StartDate)
            .ToList();
    }
}