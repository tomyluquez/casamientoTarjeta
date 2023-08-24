import express from 'express';
import dotenv from 'dotenv';
import connectDB from './mongoDB/connectDB.js';
import cors from 'cors';
import { invitadosRoutes } from '../backend/Routes/invitadosRoute.js';
import { cancionesRoutes } from '../backend/Routes/cancionesRoute.js';

// iniciamos el servidor
const app = express();

// corremos las variables de entorno
dotenv.config();

//middlewares
app.use(express.json());
app.use(cors());

//conectar a la db
connectDB();

//creamos los endpoints
app.use('/api/invitados', invitadosRoutes);
app.use('/api/canciones', cancionesRoutes);

// levantamos el server
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
  console.log('listening on port ' + PORT);
});
