const mysql = require ('mysql2')
export const mysqlPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mytravels'

})