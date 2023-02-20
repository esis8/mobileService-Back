import { Router } from "express";
import { methods as reparacionController } from "../controllers/reparacion.controller";

const router = Router();

//router.get( "/", reparacionController.getReparaciones );
router.get( "/:id", reparacionController.getReparacion );
router.get( "/", reparacionController.getReparacionesPorFecha);
router.post( "/", reparacionController.addReparacion );
router.delete( "/:id", reparacionController.deleteReparacion );
router.put( "/:id", reparacionController.updateReparacion);

export default router;