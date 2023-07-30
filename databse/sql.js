const sql=require('mysql');
require('dotenv/config');
const connection=sql.createConnection({
    host:process.env.Host,
    user:process.env.User,
    password:process.env.Password,
    database:process.env.DataBase,
    port:process.env.DBPort
})

connection.connect((err)=>{
    if(err) throw err
    console.log("DataBase Connected")
})
module.exports={connection}