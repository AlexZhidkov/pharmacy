using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Mvc;
using MySql.Data.MySqlClient;
using System.Data;
using Newtonsoft.Json;

namespace API.Controllers;

[ApiController]
[Route("[controller]")]
public class MySqlController : ControllerBase
{
    private readonly ILogger<MySqlController> _logger;
    private readonly IConfiguration _config;

    public MySqlController(ILogger<MySqlController> logger, IConfiguration config)
    {
        _logger = logger;
        _config = config;
    }

    [HttpGet(Name = "GetMySqlData")]
    public IActionResult Get()
    {
        var dataTable = new DataTable();
        string connectionString = _config.GetConnectionString("MySqlConnection");
        using (MySqlConnection connection = new MySqlConnection(connectionString))
        {
            connection.Open();
            string sql = _config["SqlQuery"];
            using (MySqlCommand command = new MySqlCommand(sql, connection))
            {
                using (MySqlDataReader reader = command.ExecuteReader())
                {
                    dataTable.Load(reader);
                }
            }
        }
        string json = JsonConvert.SerializeObject(dataTable, Formatting.Indented);
        return Ok(json);
    }
}
