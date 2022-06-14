require('express-async-errors')
const sqliteConnection = require('./database/sqlite');
const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const AppError = require('./utils/AppError');
require('dotenv').config()


const app = express()

app.use(express.json())
app.use(cors())
app.use(routes)

sqliteConnection()

app.use((error, request, response, next) => {

  if(error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message
    })
  }

  console.error(error)

  return response.status(500).json({
    status: 'error',
    message: 'Internal Server Error'
  })


})


app.listen(process.env.PORT, () => 
      console.log(`Server is running on Port ${process.env.PORT}`))
