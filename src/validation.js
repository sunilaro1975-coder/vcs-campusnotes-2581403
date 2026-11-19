export function validateNote(note) {
  return Boolean(note && typeof note.title === "string" && note.title.trim().length > 0);
}
