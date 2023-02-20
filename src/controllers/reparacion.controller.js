import { getConnection } from "../database/database";

const getReparacion = async(req, res) =>{
    try{
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM reparacion WHERE id = ?",id);
        res.json(result)
    }catch(err){
        res.status(500);
        res.send(err.message);
    }

};

/* const getReparaciones = async(req, res) =>{
    try{
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM reparacion");
        res.json(result)
    }catch(err){
        res.status(500);
        res.send(err.message);
    }

}; */

const getReparacionesPorFecha = async(req, res) =>{
    try{
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM reparacion ORDER BY fecha_recibido DESC");
        res.json(result)
    }catch(err){
        res.status(500);
        res.send(err.message);
    }

};

const addReparacion = async(req, res) =>{
    try{
        const {fecha_recibido, descripcion, estado, fecha_entregado, id_telefono} = req.body;

        if(fecha_recibido === undefined || descripcion === undefined || estado === undefined || fecha_entregado === undefined || id_telefono === undefined || fecha_recibido === "" || descripcion === "" || estado === "" || id_telefono === ""){
            res.status(400).json({message: "Datos Invalidos"})
        }else{
            const reparacion = { fecha_recibido, descripcion, estado, fecha_entregado, id_telefono }
            const connection = await getConnection();
            await connection.query("INSERT INTO reparacion SET ?", reparacion)
    
            res.status(200).json({message: "Reparacion añadida correctamente"})
        }

        
        
    }catch(err){
        res.status(500);
        res.send(err.message);
    }
}

const deleteReparacion = async(req, res) =>{
    try{
        const {id} = req.params;
        const connection = await getConnection();
        await connection.query("DELETE FROM reparacion WHERE id = ?",id);
        res.status(200).json({message: "Reparacion eliminada correctamente"})
    }catch(err){
        res.status(500);
        res.send(err.message);
    }

};

const updateReparacion = async(req, res) =>{
    try{
        const {id} = req.params;
        const {fecha_recibido, descripcion, estado, fecha_entregado, id_telefono} = req.body;

        if(fecha_recibido === undefined || descripcion === undefined || estado === undefined || fecha_entregado === undefined || id_telefono === undefined || fecha_recibido === "" || descripcion === "" || estado === "" || id_telefono === ""){
            res.status(400).json({message: "Datos Invalidos"})
        }else{
            const reparacion = { fecha_recibido, descripcion, estado, fecha_entregado, id_telefono }
            const connection = await getConnection();
            await connection.query("UPDATE reparacion SET ? WHERE id = ?", [reparacion, id])
    
            res.status(200).json({message: "Reparacion modificada correctamente"})
        }

        
        
    }catch(err){
        res.status(500);
        res.send(err.message);
    }
}



export const methods={
    //getReparaciones,
    getReparacion,
    getReparacionesPorFecha,
    addReparacion,
    deleteReparacion,
    updateReparacion
}