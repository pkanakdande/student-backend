const mongoose=require("mongoose")
require('dotenv').config()
mongoose.connect(process.env.DB_URL + process.env.DB_NAME)
.then(()=>{
    console.log("connected")
}).catch(()=>{
    console.log("error")
})


let createSchema=new mongoose.Schema({
    name:{type:String},
    dob:{type:String},
    address:{type:String},
    standard:{type:String},
    city:{type:String},
    phonenumber:{type:String},
    math:{type:Number},
    english:{type:Number},
    sci:{type:Number},
    hindi:{type:Number},
    history:{type:Number},
    percentage:{type:Number}
}
)

let dbmodel=mongoose.model('students',createSchema)

module.exports=dbmodel