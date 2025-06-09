import express, { Request, Response } from "express";
import { PORT } from "./config";

const app = express();

// Enable JSON body parsing
app.use(express.json());

// A quick healthcheck endpoint
app.get("/ping", (_req: Request, res: Response) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Placeholder for chat routes (we’ll fill this next)
app.post("/chat", (req: Request, res: Response) => {
  res.json({ error: "Not implemented yet" });
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
