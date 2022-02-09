import express from 'express';
import morgan from 'morgan';
import cors from 'cors';


console.log('desde el back');

// para trabajr en un puerto creamos una instancia de express
 
const app = express();
// esto escrito asi hace q todas los metodos y propiedades de express se guarden en esa variable

// crear uun puerto
// para acceder a una variable q creado con set accedo con get

app.set('port',process.env.PORT || 4000);

// hacemos el listen para que mepieze a ejecutar y con el console.log sabemos que se esta ejecutando
app.listen(app.get('port'),()=>{
    console.log('Estoy en el puerto '+ app.get('port'))
})

// aca van los middleworlds extras que van siempre entre el

app.use(morgan('dev'));//info extra en la terminal
app.use(cors());//acepta peticiones remotas o externas
//interpretar obejetos en formato json
app.use(express.json());
app.use(express.urlencoded({extended:true}));



// hasta aca arranco el back pero si agrego cambios no los percibe, por lo q hay q parar el servidor y arrancarlo de nuevo, pero esto es miuy tedioso por lo q usamos nodemon que actualiza cada vez q hay cambios

// middleworlds configuraciones para trabajar con una ruta. son varios se los pueden encontrar en la documentacion ayudar a dar info en la terminal

// ruta de prueba
// metodo use lleva parametros le indic aa expres q use una ruta para chacer algo especifico
// set lleva parametros la primera es la ruta , segund es una funcion en forma de flecha q tmb tiene parametros la primera es la consulta y la segubda la respuesta
app.get('/products', (req,res)=>{
    // aca ponemos lo q queresm q pase cuando se ejecute esta consukta
    res.send('hola estoy en la respuesta')
})
app.get('/', (req,res)=>{
    // aca ponemos lo q queresm q pase cuando se ejecute esta consukta
    res.send('hola estoy en la respuesta de la ruta principla')
})