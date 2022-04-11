import mongoose from "mongoose";

//const url = 'mongodb://localhost:27017/cafejony';
const url = 'mongodb+srv://natiSanchez:nAti4246690@clustertest.ioylr.mongodb.net/cafejony';

//coneccion a la base de datos
mongoose.connect(url);


//gaurdmos la coneccion en una constante
const connection = mongoose.connection;


//usamos once para decirle una vez q se abrio la coneccion con la bd entonces ejecuta esta funcion anonima, donde hace un console.log que nos dice que la db esta conectada
//lo importamos en el indexjs para que lo ejecute
connection.once('open', ()=>{
    console.log('base de datos conectada')
})