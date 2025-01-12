const express = require('express')
const app = express()
const ProductRoutes = require("./route/prroute")
const dotenv = require("dotenv")
const mongoose = require("mongoose")
const cors = require("cors")
dotenv.config()

app.use(cors())
const DB_URL = process.env.DB_URL
const PORT = process.env.PORT

app.use(express.json());

app.use("/products", ProductRoutes )


app.get('/', (req, res) => {
  res.send('Hello World!')
})





mongoose.connect(DB_URL).then(()=>{
   console.log("Connected!!!!");
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})    
})