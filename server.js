const express = require('express')
const cors = require("cors")
const morgan = require("morgan")
const dotenv = require("dotenv")
const colors = require("colors")
const connectDb = require('./config/connectDB')
// config dot env

dotenv.config();

// database calls

connectDb();

// rest object
const app = express()

// middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

// routes

// User routes
app.use("/api/v1/users", require("./routes/userRoute"));

// Transection routes

app.use("/api/v1/transections", require("./routes/transectionRoute"))

// port

const PORT = 8080 || process.env.PORT

// listen server
app.listen(PORT, () =>{
    
    console.log(`Server running on ${PORT}`);
});