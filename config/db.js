const mongoose =require("mongoose")

const connectDB=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log("connected to database");
    }
    catch(err){
        console.log("error in mongoDB",err );
        process.exit(1);
    }
}

module.exports=connectDB;
