import { Router } from 'express';
import json from '../models/ghostRidersInTheSky/notation.json';

const router = Router();

router.get('/', async (req, res) => {
    return res.send(json);
});

export default router;