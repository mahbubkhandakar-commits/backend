import express from 'express';
import { clientController } from './client.controller';

const router = express.Router();


router.post('/',  clientController.createClient);

router.get('/',  clientController.getAllClients);

router.patch('/:id',  clientController.updateClient);
router.delete('/:id',  clientController.deleteClient);





export const clientRoutes = router;