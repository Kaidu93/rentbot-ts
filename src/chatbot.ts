import { RentalInfo } from "./types";

// In-memory storage. Key = sessionId; Value = partial slots collected so far
export const sessionStore = new Map<string, Partial<RentalInfo>>();

// A helper to initialize state if needed:
export function getOrCreateSession(sessionId: string): Partial<RentalInfo> {
  if (!sessionStore.has(sessionId)) {
    sessionStore.set(sessionId, {
      name: undefined,
      surname: undefined,
      age: undefined,
      gender: undefined,
      university: undefined,
      budget: undefined,
      location: undefined,
      bedroomCount: undefined,
      neighbors: undefined,
    });
  }
  return sessionStore.get(sessionId)!;
}
