import express from 'express';
import KPI from '../models/KPI.js';

export const router = express.Router();

router.get('/kpis', async (rec, res) => {
	try {
		const kpis = await KPI.find();
		res.status(200).json(kpis);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
});