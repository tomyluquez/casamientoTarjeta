import { Router } from 'express';
import { createCancion, getCanciones } from '../Handlers/hanlders.js';
const router = Router();

router.post('/', createCancion).get('/', getCanciones);

export { router as cancionesRoutes };
