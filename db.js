//const pool =require('pg').Pool
const { Pool } = require('pg');
const pool =new Pool({
    user:"postgres",
    host:"localhost",
    database:"students",
    password:"postgresql_123",
    port:'5432'
})

module.exports =pool