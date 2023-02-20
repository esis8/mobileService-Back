import { Router } from "express";
import { methods as telefonoController } from "../controllers/telefono.controller";

const router = Router();

router.get( "/", telefonoController.getTelefonos );
router.get( "/:id", telefonoController.getTelefono );
router.post( "/", telefonoController.addTelefono );
router.delete( "/:id", telefonoController.deleteTelefono );
router.put( "/:id", telefonoController.updateTelefono);

export default router;