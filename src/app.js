import express from "express";
import morgan from "morgan";
import cors from "cors";


// Routes
import clienteRoutes from "./routes/cliente.routes";
import telefonoRoutes from "./routes/telefono.routes";
import reparacionRoutes from "./routes/reparacion.routes";

const app = express();

// settings

app.set("port", 3000);

// middlewares

app.use(cors());
app.use(morgan("dev")); // usar modulo morgan en modo desarrollo
app.use(express.json()); // para que el servidor pueda entender json

//Routes

app.use("/api/clientes", clienteRoutes);
app.use("/api/telefonos", telefonoRoutes);
app.use("/api/reparaciones", reparacionRoutes);


export default app;