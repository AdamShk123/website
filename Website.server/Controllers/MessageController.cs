using Microsoft.AspNetCore.Mvc;
using Website.server.Models;

namespace Website.server.Controllers;

[ApiController]
[Route("/api/messages")]
public class MessageController(ILogger<MessageController> logger, MessageContext ctx) : ControllerBase
{
    [HttpGet(Name = "GetMessages")]
    public IEnumerable<MessageModel> Get()
    {
        logger.Log(LogLevel.Debug, "GetMessages Called!");
        return ctx.Messages;
    }
    
    [HttpPost]
    public async Task<ActionResult<MessageModel>> Post(MessageModel message)
    {
        ctx.Messages.Add(message);
        await ctx.SaveChangesAsync();
        
        return CreatedAtAction(nameof(Get), new { id = message.Id }, message);
    }

}