const monogoose = require ('mongoose');

monogoose.set('strictQuery',false);
monogoose.connect("mongodb+srv://ShehrozAmjad:786shehroz@cluster0.87jy690.mongodb.net/Ticket",{
    useUnifiedTopology:true,UseNewUrlParser:true
})

var db=monogoose.connection
db.on("connected",()=>{
    console.log("Database Connected");
})
db.on("error",()=>{
    console.log("Database Connectivity Error");
})

module.exports =monogoose