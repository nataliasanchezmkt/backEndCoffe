// controlador de los productos
  const productoCtrl = {};
// agregamos la logica pra opbetener la lista de productos

productoCtrl.listarProductos= (req,res)=>{
    //toda la logica q quiero q suceda para obtener la lista
    res.send('hola desde el banckend!')
};

productoCtrl.crearProductos=(req, res) => {
    console.log(req.body)
    res.send('voy a crear un producto')
}



export default productoCtrl
