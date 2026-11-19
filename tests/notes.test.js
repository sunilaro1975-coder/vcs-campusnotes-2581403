import test from "node:test";
import assert from "node:assert/strict";
import { createNote, listNotes } from "../src/notes.js";
import { validateNote } from "../src/validation.js";

test("creates a note with a title", () => {
  const note = createNote("VCS", "Practice Git");
  assert.equal(note.title, "VCS");
  assert.equal(validateNote(note), true);
});
test("rejects blank titles", () => {
  assert.throws(() => createNote("   ", "body"), /title is required/);
});
test("sorts notes newest first", () => {
  const result = listNotes([{createdAt:"2020"},{createdAt:"2024"}]);
  assert.equal(result[0].createdAt, "2024");
});
