const mongoose = require('mongoose');
// import dotenv from 'dotenv';
mongoose.set('strictQuery', false);

main().catch(err=>console.log(err));

// async function main (){
//     await mongoose.connect("mongodb+srv://Vanshika:Vanshika@cluster0.hozpztk.mongodb.net/udyamWell?retryWrites=true&w=majority").then(console.log("db connected"));
// }


// async function main (){
//     await mongoose.connect(process.env.MONGO_URI).then(console.log("db connected"));
// }

async function main (){
    await mongoose.connect("mongodb+srv://udyamwell:Udyamwell01@cluster0.ccemrys.mongodb.net/?retryWrites=true&w=majority").then(console.log("db connected"));
}

// async function main (){
//     await mongoose.connect("mongodb://localhost:27017/udyamwell_development");
// }

//

// 
// import mongoose from "mongoose";

// dotenv.config();
// function Connect_db(){
// mongoose.connect(process.env.MONGO_URI,{
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// })
// .then((res)=>console.log("Mongodb is connected"));
// }
// export default Connect_db;