const sql = require("mssql/msnodesqlv8");
require("dotenv").config();

const dbConfig = {
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  options: {
    instanceName: process.env.DB_INSTANCE,
    encrypt: process.env.DB_ENCRYPT === "true",
    trustServerCertificate: process.env.DB_TRUST_CERT === "true",
    enableArithAbort: true,
    trustedConnection: true  
  },
  connectionTimeout: 30000,
  requestTimeout: 30000
};

async function getConnection() {
  try {
    return await sql.connect(dbConfig);
  } catch (error) {
    console.log("ERROR SQL SERVER:", error.message);
    throw error;
  }
}

module.exports = { sql, getConnection };