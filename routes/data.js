import { Router } from 'express';
import json from '../models/index.json';
import fs from 'fs';
import path from "path";

const router = Router();

router.get('/', async (req, res) => {
    json.forEach(item=>{
        item.image = fs.readFileSync(path.resolve(__dirname, (`../models/${item.id}/cover.jpg`)), { encoding: 'base64' });
    });
    return res.send(json);
});

export default router;
