const mongoose =require("mongoose")

async function connect(){
   try {
    await mongoose.connect("mongodb://localhost:27017/todo-tdd",{useNewUrlParser: true})
   } catch (error) {
    console.log(error);
    console.error("Error connecting mongodb");
   }
}

module.exports ={connect}

