import mongoose from "mongoose";

const url = 'mongodb://localhost:27017/cafejony';

mongoose.connect(url);

const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log('base de datos conectada')
})