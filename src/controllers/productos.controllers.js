import { request } from 'express';
import Producto from '../models/producto'

// controlador de los productos
  const productoCtrl = {};
// agregamos la logica pra opbetener la lista de productos

productoCtrl.listarProductos=async (req,res)=>{
    //toda la logica q quiero q suceda para obtener la lista
   try {

    //enviar la lista de productos
    // crear una rreglo apra q gairde toso lo q encunetre en la bd

    const listaProductos = await Producto.find();
    res.status(200).json(listaProductos);
     
   } catch (error) {
    console.log(error);
    //enviar un codigo de error
    res.status(404).json({
      mensaje:'Error al intentar listar un producto :('

    })
     
   }
};

productoCtrl.crearProductos= async(req, res) => {
  try{
    console.log(req.body)
    //validar
    //crear el producto en la bd
    const productoNuevo = new Producto({
      name: req.body.name,
      price:req.body.price,
      url: req.body.url,
      category: req.body.category
    })


    //guardar el objeto nuevo en la bd
    await productoNuevo.save();
    // enviar respuesta

    res.status(201).json({
      mensaje: 'Producto correctamente creado! :)'
    })

  }catch(error){
    console.log(error);
    //enviar un codigo de error
    res.status(404).json({
      mensaje:'Error al intentar agregar un producto :('

    })
  }
   
}



productoCtrl.obtenerProducto = async(req,res)=>{
  try {
    //obtenrr el id de la consulta
    console.log(req.params.id);
    // buscar el prduuto

    const productoBuscado = await Producto.findById(req.params.id)
    // enviar la respuesta
    res.status(200).json(productoBuscado)


    // buscar el producto

    // enviar la respuesta
    
  } catch (error) {
    console.log(error);
    //enviar un codigo de error
    res.status(404).json({
      mensaje:'Error no se pudo obtener el producto buscado :('

    })
    
  }
}



productoCtrl.editarProducto = async(req,res)
=>{
  try {
    
    //agregar validaciones
    await Producto.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({mensaje: 'producto fue editado correctamente'})
    
  } catch (error) {
    console.log(error)
    res.status(404).json({
      mensaje: 'Error no se pudo editar el producto '
    })
    
  }
}


// Borrar producto

  productoCtrl.borrarProducto = async (req, res)=>{
    try {
      await Producto.findByIdAndDelete(req.params.id);
      res.status(200).json({mensaje:'Producto borrado correctamente yay!'})
    } catch (error) {
      console.log(error)
      res.status(404).json({
        mensaje: 'Error no se pudo borrar el producto '
      })
    }
  }



export default productoCtrl


