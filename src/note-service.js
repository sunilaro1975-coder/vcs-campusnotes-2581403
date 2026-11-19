import { createNote, listNotes } from "./notes.js";
import { validateNote } from "./validation.js";

export function addNote(store, title, body) {
  const note = createNote(title, body);
  if (!validateNote(note)) throw new Error("Invalid note");
  store.push(note);
  return note;
}
export function getNotes(store) {
  return listNotes(store);
}
