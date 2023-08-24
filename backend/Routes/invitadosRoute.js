import { Router } from 'express';
import { createInvitado, getInvitados } from '../Handlers/hanlders.js';
const router = Router();

router.post('/', createInvitado).get('/', getInvitados);

export { router as invitadosRoutes };
