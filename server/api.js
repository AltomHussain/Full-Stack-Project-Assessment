import { Router } from "express";
import db from "./db.js";
const router = Router();

router.get("/videos", async (_, res) => {
	const result = await db.query("select * from videos;");
	res.json(result);
	// res.json(result.rows[0]);
});

export default router;
