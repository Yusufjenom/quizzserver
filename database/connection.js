const mongoose = require("mongoose");

module.exports = async function connect(){
    await mongoose.connect("mongodb+srv://yusufjenom16:DAUDAjustina16@quizz-app.bt7roaw.mongodb.net/quiz-appDB?retryWrites=true&w=majority")
    // await mongoose.connect("mongodb://0.0.0.0:27017/quiz-app")
    console.log("Database Connected")
}