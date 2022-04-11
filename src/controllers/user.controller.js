import { validateEmail, validatePassword } from '../helpers/ValidateForms';
import User from '../models/user'


const bcrypt = require("bcrypt");

const userCtrl ={}

userCtrl.listarUsuarios= async(req, res)=>{
    try {
        const listarUsuarios = await User.find();
        res.status(200).json(listarUsuarios);
        
    } catch (error) {
        console.log(error);
        res.status(404).json({mensaje: "Error al traer los usuarios"})
        
    }
}

userCtrl.crearUsuarios= async(req,res)=>{
    try {
        // validaciones

        if(!validateEmail(req.body.email)|| !validatePassword(req.body.password)){
            console.log('no se pudo realziar la validacion')
            res.status(404).json({mensaje: "Error al validar los usuarios"})
            return false
        }
        


        const nuevoUsuario = new User({
            email: req.body.email,
            password: await bcrypt.hash(req.body.password, 10),
        })

        await nuevoUsuario.save();
        res.status(201).json({
            mensaje: 'Usuario fue correcamente creado'
        })
    } catch (error) {
        console.log(error);
        res.status(404).json({
        mensaje:"no se pudo crear el usuario"
        })
        }
    
}

export default userCtrl