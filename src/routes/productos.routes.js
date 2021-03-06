// la mision de este archivo es mantener las rutas o peticiones

// herramienta de express apra crear rutas
import { Router } from "express";
import productoCtrl from "../controllers/productos.controllers";
// instanciamos el router
const router = Router();

//crear la ruta

router
  .route("/products")
  .get(productoCtrl.listarProductos)
  .post(productoCtrl.crearProductos);

router
  .route("/products/:id")
  .get(productoCtrl.obtenerProducto)
  .put(productoCtrl.editarProducto)
  .delete(productoCtrl.borrarProducto);
// dentro de la misma ruta podemos mandar distintas peitciones sin imopoartar el orden
export default router;
