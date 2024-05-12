import { Router } from "express";
import db from "./db.js";
const router = Router();

router.get("/videos", async (_, res) => {
	const result = await db.query("select * from videos;");
	if (result.rows.length > 0) {
		res.json({
			length: result.rows.length,
			Result: result.rows,
		});
	} else {
		res.json({ success: false, error: "Could not connect to the database" });
	}
	// res.json(result.rows[0]);
});

export default router;
