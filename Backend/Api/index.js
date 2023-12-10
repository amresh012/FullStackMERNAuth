import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

// process.env.MONGOU

mongoose.connect("mongodb+srv://amreshmishra67088:fHLqr906FXennbfX@mern.yijis4x.mongodb.net/mern-auth?retryWrites=true&w=majority")
.then(()=>{console.log("Connected to MongoDB")})
.catch((err)=>{console.log(err)})

const app = express()


app.listen(3000, ()=>{console.log(`Server is listning on port 3000! `)})



// P--- fHLqr906FXennbfX