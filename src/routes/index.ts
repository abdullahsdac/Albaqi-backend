import { Router } from "express";
const router = Router();

// Example route
router.get("/", (req, res) => {
  res.send("Hello World!");
});

export default router;
