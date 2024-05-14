const mysql = require('mysql2')
require("dotenv").config();
let pool

const MySqlConnect =()=>{
    pool = mysql.createPool({
        host: '127.0.0.1',
        user: process.env.MYSQL_USERNAME,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
        port: process.env.MYSQL_PORT
      }).promise()
    
}

const getIndividualBooking = async(req,res)=>{
 try{
  const therapist = req.params.id
  const result = await pool.query(`SELECT
  DAYNAME(slot_datetime) AS day,
  DATE_FORMAT(slot_datetime, '%Y-%m-%d') AS date,
  TIME(slot_datetime) AS time,
  CASE
      WHEN TIME(slot_datetime) BETWEEN '09:00:00' AND '11:59:59' THEN 'MORNING'
      WHEN TIME(slot_datetime) BETWEEN '12:00:00' AND '15:59:59' THEN 'NOON'
      WHEN TIME(slot_datetime) BETWEEN '16:00:00' AND '20:59:59' THEN 'EVENING'
      ELSE 'UNKNOWN'
  END AS section
FROM
  available_slots
WHERE
  therapist_id = ?;`,[therapist])

  console.log(result[0]);
  res.send(result[0])
 }
 catch(err){
  console.log(err);
 }
}

const getTherapistDetails = async(req,res)=>{
  try{
    const id = req.params.id
    const result = await pool.query(`select id,name,expertise,details,languages from therapist where id = ?;`,[id])
    console.log(result[0]);
    res.send(result[0])

  }
  catch(err){
    console.log(err);
  }
}

const getPatientDetails = async(req,res)=>{
  try{
    const id = req.params.id
    const result = await pool.query(`select id,name,email,phone,history from patient where id = ?;`,[id])
    console.log(result[0]);
    res.send(result[0])

  }
  catch(err){
    console.log(err);
  }
}



module.exports = {MySqlConnect,getIndividualBooking,getTherapistDetails,getPatientDetails}
