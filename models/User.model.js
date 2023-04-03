const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    
        id:Number,
        username:String,
        name:String,
        email:String,
        phone:String,
        website:String,
        address: {
        street:String,
        suite:String,
        city:String,
        zipcode:String
        },
        company: {
        name:String
        }
        
})
const UserModel=mongoose.model("user",userSchema)

module.exports={UserModel}