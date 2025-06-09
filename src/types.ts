// src/types.ts

/**
 * This describes the final payload we send to our downstream API.
 * All fields are mandatory once collection is complete.
 */
export interface RentalInfo {
  name: string;
  surname: string;
  age: number;
  gender: "male" | "female" | "other"; // adjust as needed
  university: string;
  budget: number;        // monthly
  location: string;      // city or neighborhood
  bedroomCount: number;  // ≥ 1
  neighbors: string;
}

export interface ChatRequest {
  sessionId: string;
  message: string;
}

/**
 * This describes what the server returns on each chat turn:
 *   - nextPrompt: the bot's next question (unless done);
 *   - done: whether all fields have been gathered;
 *   - data: the completed RentalInfo if done===true.
 */
export interface ChatResponse {
  nextPrompt: string;
  done: boolean;
  data?: RentalInfo;
}
