import { w2n } from "word2number"; // if you install a word2number npm package
// or you can write your own “words→number” logic

/**
 * Validate “name surname” pairs.
 */
export function validateNameSurname(text: string): { name?: string; surname?: string; ok: boolean } {
  const parts = text.trim().split(/\s+/);
  if (parts.length >= 2 && parts[0].match(/^[A-Za-z]+$/) && parts[1].match(/^[A-Za-z]+$/)) {
    return { name: parts[0], surname: parts[1], ok: true };
  }
  return { ok: false };
}

/**
 * Validate age (number or word form) and ensure it’s between 18 and 100.
 */
export function validateAge(text: string): { age?: number; ok: boolean } {
  let n: number | null = null;
  // Try parsing as integer first
  const parsedInt = parseInt(text, 10);
  if (!isNaN(parsedInt)) {
    n = parsedInt;
  } else {
    // Try converting words ("forty one") → 41 (if you install word2number)
    try {
      n = w2n(text);
    } catch {
      n = null;
    }
  }
  if (n !== null && n >= 18 && n <= 100) {
    return { age: n, ok: true };
  }
  return { ok: false };
}

// TODO: write similar stubs for gender, university, budget, location, bedroomCount, neighbors.
// Each returns { <field>: cleanedValue, ok: boolean } or { ok: false } if invalid.
