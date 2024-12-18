using Azure;
using Azure.Communication.Email;
using Microsoft.AspNetCore.Mvc;
using Website.server.Models;

namespace Website.server.Controllers;

[ApiController]
[Route("/api/messages")]
public class MessageController(ILogger<MessageController> logger, MessageContext ctx, EmailClient client) : ControllerBase
{
    private const string Domain = "adamshkolnik.com";
    
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
        
        var toRecipients = new List<EmailAddress> { new EmailAddress(message.Email) };
        var ccRecipients = new List<EmailAddress> { new EmailAddress("adam.shkolnik@outlook.com") };
        
        var emailMessage = new EmailMessage(
            senderAddress: $"DoNotReply@{Domain}",
            content: new EmailContent("Test Email")
            {
                PlainText = "Hello, this is a confirmation that your message has been received.",
                Html = $"""
                        <html>
                           <body>
                               <h1>Hello, this is a confirmation that your message has been received.</h1>
                               <p>
                                   Name: {message.Name}
                               </p>
                               <p>
                                   Email: {message.Email}
                               </p>
                               <p>
                                   Message: {message.Message}
                               </p>
                           </body>
                       </html>
                       """
            },
            recipients: new EmailRecipients(toRecipients, ccRecipients)
        );

        try
        {
            await client.SendAsync(WaitUntil.Completed, emailMessage);
            
            var record = await ctx.FindAsync<MessageModel>(message.Id);
            if (record is not null)
            {
                record.Mailed = true;
                await ctx.SaveChangesAsync();   
            }
        }
        catch (RequestFailedException exception)
        {
            logger.Log(LogLevel.Error, exception.Message);
        }
        
        return CreatedAtAction(nameof(Get), new { id = message.Id }, message);
    }

}