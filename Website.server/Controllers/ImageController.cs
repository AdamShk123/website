using Azure.Storage.Blobs;
using Microsoft.AspNetCore.Mvc;
    
namespace Website.server.Controllers;

[ApiController]
[Route("/api/image")]
public class ImageController(BlobContainerClient client) : ControllerBase
{
    [HttpGet("{blobName}")]
    public async Task<ActionResult<string>> GetImage(string blobName)
    {
        var blobClient = client.GetBlobClient(blobName);

        var exists = await blobClient.ExistsAsync();
        if (!exists)
        {
            return NotFound();
        }

        var blob = await blobClient.DownloadContentAsync();

        return blob.Value.Content.ToString();
    }
}