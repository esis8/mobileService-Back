import { getConnection } from "../database/database";

const getCliente = async(req, res) =>{
    try{
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM cliente WHERE id = ?",id);
        res.json(result)
    }catch(err){
        res.status(500);
        res.send(err.message);
    }

};

const getClientes = async(req, res) =>{
    try{
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM cliente");
        res.json(result)
    }catch(err){
        res.status(500);
        res.send(err.message);
    }

};

const getTelefonoPorCliente = async(req, res) =>{
    try{
        const {id} = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT cliente.nombre, cliente.apellido, telefono.modelo FROM cliente JOIN telefono ON cliente.id = telefono.id_cliente WHERE cliente.id = ?",id);
        res.json(result)
    }catch(err){
        res.status(500);
        res.send(err.message);
    }

};

const addCliente = async(req, res) =>{
    try{
        const {nombre, apellido, documento} = req.body;

        if(nombre === undefined || apellido === undefined || documento === undefined || nombre === "" || apellido === "" || documento === ""){
            res.status(400).json({message: "Datos Invalidos"})
        }else{
            const cliente = { nombre, apellido, documento }
            const connection = await getConnection();
            await connection.query("INSERT INTO cliente SET ?", cliente)
    
            res.status(200).json({message: "Cliente añadido correctamente"})
        }

        
        
    }catch(err){
        res.status(500);
        res.send(err.message);
    }
}

const deleteCliente = async(req, res) =>{
    try{
        const {id} = req.params;
        const connection = await getConnection();
        await connection.query("DELETE FROM cliente WHERE id = ?",id);
        res.status(200).json({message: "Cliente eliminado correctamente"})
    }catch(err){
        res.status(500);
        res.send(err.message);
    }

};

const updateCliente = async(req, res) =>{
    try{
        const {id} = req.params;
        const {nombre, apellido, documento} = req.body;

        if(id === undefined || nombre === undefined || apellido === undefined || documento === undefined || id === "" ||  nombre === "" || apellido === "" || documento === ""){
            res.status(400).json({message: "Datos Invalidos"})
        }else{
            const cliente = { nombre, apellido, documento }
            const connection = await getConnection();
            await connection.query("UPDATE cliente SET ? WHERE id = ?", [cliente, id])
    
            res.status(200).json({message: "Cliente modificado correctamente"})
        }

        
        
    }catch(err){
        res.status(500);
        res.send(err.message);
    }
}



export const methods={
    getClientes,
    getCliente,
    getTelefonoPorCliente,
    addCliente,
    deleteCliente,
    updateCliente
}