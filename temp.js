const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  port: 3306,
  database: "next-events",
  user: "root",
  password: "Edx740@)",
});

const dbPool = pool.promise();

async function run() {
  const data = await dbPool.query(
    `INSERT INTO newsletter (mail) VALUES('temp@temp.com')`
  );
  console.log(data);
}

run();
