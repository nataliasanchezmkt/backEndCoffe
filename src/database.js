import mongoose from "mongoose";

// const url = 'mongodb://localhost:27017/cafejony';
const url = 'mongodb+srv://natiSanchez:nAti4246690@clustertest.ioylr.mongodb.net/cafejony';

mongoose.connect(url);

const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log('base de datos conectada')
})