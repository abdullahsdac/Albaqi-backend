import express from "express";
import cors from "cors";
import { Request, Response, NextFunction } from "express";
import routes from "./routes";

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use("/", routes);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
