import { Router } from "express";
import { methods as clienteController } from "../controllers/cliente.controller";

const router = Router();

router.get( "/", clienteController.getClientes );
router.get( "/:id", clienteController.getCliente );
router.get( "/:id/telefono", clienteController.getTelefonoPorCliente );
router.post( "/", clienteController.addCliente );
router.delete( "/:id", clienteController.deleteCliente );
router.put( "/:id", clienteController.updateCliente );

export default router;