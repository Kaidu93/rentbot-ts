import express, { Request, Response, NextFunction } from "express";
import { PORT } from "./config";
import { getOrCreateSession } from "./chatbot";
import { ChatRequest, ChatResponse } from "./types";

const app = express();
app.use(express.json());

app.post(
  "/chat",
  (req: Request, res: Response, _next: NextFunction): void => {
    const { sessionId, message } = req.body as ChatRequest;

    if (!sessionId || !message) {
      res.status(400).json({ error: "Must provide sessionId and message" });
      return;
    }

    const state = getOrCreateSession(sessionId);
    const reply: ChatResponse = {
      nextPrompt: `You said: "${message}". (STATE = ${JSON.stringify(state)})`,
      done: false,
    };

    res.json(reply);
  }
);

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
