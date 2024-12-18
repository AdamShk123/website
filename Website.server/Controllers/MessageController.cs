using Microsoft.AspNetCore.Mvc;
using Website.server.Models;

namespace Website.server.Controllers;

[ApiController]
[Route("/api/messages")]
public class MessageController(MessageContext ctx) : ControllerBase
{
    [HttpGet]
    public ActionResult<int> Get()
    {
        return ctx.Messages.Count();
    }
    
    [HttpPost]
    public async Task<ActionResult<MessageModel>> Post(MessageModel message)
    {
        ctx.Messages.Add(message);
        await ctx.SaveChangesAsync();
        
        return CreatedAtAction(nameof(Get), new { id = message.Id }, message);
    }

}