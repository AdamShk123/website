using Azure;
using Microsoft.EntityFrameworkCore;
using Website.server.Models;

using Azure.Identity;
using Azure.Security.KeyVault.Secrets;
using Azure.Storage.Blobs;

var builder = WebApplication.CreateBuilder(args);

var factory = LoggerFactory.Create(b => b.AddDebug().AddConsole());
var logger = factory.CreateLogger<Program>();

if (builder.Environment.IsDevelopment())
{
    Environment.SetEnvironmentVariable("AZURE_CLIENT_ID", builder.Configuration["AppClientID"]);
    Environment.SetEnvironmentVariable("AZURE_TENANT_ID", builder.Configuration["AppTenantID"]);
    Environment.SetEnvironmentVariable("AZURE_CLIENT_SECRET", builder.Configuration["AppClientSecret"]);
}

var credential = new DefaultAzureCredential(
    new DefaultAzureCredentialOptions
    {
        ManagedIdentityClientId = "a41232ad-8d13-47fd-bf67-66c5d9504887"
    }
);

const string secretName = "connection";
const string keyVaultName = "portfolio-website-vault";
const string kvUri = $"https://{keyVaultName}.vault.azure.net";
    
var client = new SecretClient(new Uri(kvUri), credential);

var connectionString = "";

try
{
    connectionString = client.GetSecret(secretName).Value.Value;
    
}
catch (RequestFailedException exception)
{
    logger.Log(LogLevel.Information, exception.Message);
}

const string account = "portfoliostorageaccount";
const string container = "container";

const string containerEndpoint = $"https://{account}.blob.core.windows.net/{container}";

builder.Services.AddSingleton(
    new BlobContainerClient(
        new Uri(containerEndpoint),
        credential
    )
);

const string localhost = "localhost";

builder.Services.AddCors(options =>
{
    options.AddPolicy(
        name: localhost,
        policy => policy.SetIsOriginAllowed(_ => true).WithMethods("GET","POST").WithHeaders("access-control-allow-origin", "content-type")
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