using Azure;
using Microsoft.EntityFrameworkCore;
using Website.server.Models;

using Azure.Identity;
using Azure.Security.KeyVault.Secrets;

var builder = WebApplication.CreateBuilder(args);
var connectionString = "";
const string clientId = "a41232ad-8d13-47fd-bf67-66c5d9504887";

var factory = LoggerFactory.Create(b => b.AddDebug().AddConsole());
var logger = factory.CreateLogger<Program>();

if (builder.Environment.IsDevelopment())
{
    connectionString = builder.Configuration["ConnectionStrings:PortfolioDatabase"];
}
else
{
    const string secretName = "connection";
    const string keyVaultName = "portfolio-website-vault";
    const string kvUri = $"https://{keyVaultName}.vault.azure.net";
    
    var client = new SecretClient(new Uri(kvUri), new ManagedIdentityCredential(clientId));
    try
    {
        connectionString = client.GetSecret(secretName).Value.Value;
    }
    catch (RequestFailedException exception)
    {
        logger.Log(LogLevel.Debug,exception.Message);
    }   
}

const string localhost = "localhost";

builder.Services.AddCors(options =>
{
    options.AddPolicy(
        name: localhost,
        policy => policy.SetIsOriginAllowed(_ => true)
    );
});

builder.Services.AddControllers();

builder.Services.AddDbContext<MessageContext>(options => options.UseSqlServer(connectionString));
builder.Services.AddDbContext<JobContext>(options => options.UseSqlServer(connectionString));

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors(localhost);

app.UseAuthorization();

app.MapControllers();

app.Run();