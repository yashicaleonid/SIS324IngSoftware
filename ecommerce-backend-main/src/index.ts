import express from "express";
import Router from "./routes/EcommersRouter";
import cors from "cors";

const app = express();

// Configuraciones de CORS
const corsOptions = {
    origin: process.env.ORIGIN_CORS,
    methods: "GET, POST, PUT, DELETE",
    preflightContinue: false,
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());

// Rutas de usuario
app.use('/api', Router);

// Puerto
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

// Mensaje al iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
