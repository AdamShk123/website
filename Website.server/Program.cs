using Microsoft.EntityFrameworkCore;
using Website.server.Models;

using Azure.Identity;
using Azure.Security.KeyVault.Secrets;

var builder = WebApplication.CreateBuilder(args);
var connectionString = "";

if (builder.Environment.IsDevelopment())
{
    connectionString = builder.Configuration["ConnectionStrings:PortfolioDatabase"];
}
else
{
    const string secretName = "connection";
    const string keyVaultName = "portfolio-website-vault";
    var kvUri = $"https://{keyVaultName}.vault.azure.net";
    
    var client = new SecretClient(new Uri(kvUri), new DefaultAzureCredential());
    connectionString = client.GetSecretAsync(secretName).Result.Value.Value;
}


const string localhost = "localhost";

builder.Services.AddCors(options =>
{
    options.AddPolicy(
        name: localhost,
        policy => policy.SetIsOriginAllowed(origin => true)
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

app.UseAuthorization();

app.MapControllers();

app.Run();