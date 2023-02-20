import { getConnection } from "../database/database";

const getTelefono = async(req, res) =>{
    try{
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM telefono WHERE id = ?",id);
        res.json(result)
    }catch(err){
        res.status(500);
        res.send(err.message);
    }

};

const getTelefonos = async(req, res) =>{
    try{
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM telefono");
        res.json(result)
    }catch(err){
        res.status(500);
        res.send(err.message);
    }

};

const addTelefono = async(req, res) =>{
    try{
        const {modelo, id_cliente} = req.body;

        if(modelo === undefined || id_cliente === undefined || modelo === "" || id_cliente === ""){
            res.status(400).json({message: "Datos Invalidos"})
        }else{
            const telefono = { modelo, id_cliente }
            const connection = await getConnection();
            await connection.query("INSERT INTO telefono SET ?", telefono)
    
            res.status(200).json({message: "Telefono añadido correctamente"})
        }

        
        
    }catch(err){
        res.status(500);
        res.send(err.message);
    }
}

const deleteTelefono = async(req, res) =>{
    try{
        const {id} = req.params;
        const connection = await getConnection();
        await connection.query("DELETE FROM telefono WHERE id = ?",id);
        res.status(200).json({message: "Telefono eliminado correctamente"})
    }catch(err){
        res.status(500);
        res.send(err.message);
    }

};

const updateTelefono = async(req, res) =>{
    try{
        const {id} = req.params;
        const {modelo, id_cliente} = req.body;

        if(id === undefined || modelo === undefined || id_cliente === undefined || id === "" ||  modelo === "" || id_cliente === ""){
            res.status(400).json({message: "Datos Invalidos"})
        }else{
            const telefono = { modelo, id_cliente }
            const connection = await getConnection();
            await connection.query("UPDATE telefono SET ? WHERE id = ?", [telefono, id])
    
            res.status(200).json({message: "Telefono modificado correctamente"})
        }

        
        
    }catch(err){
        res.status(500);
        res.send(err.message);
    }
}



export const methods={
    getTelefonos,
    getTelefono,
    addTelefono,
    deleteTelefono,
    updateTelefono
}