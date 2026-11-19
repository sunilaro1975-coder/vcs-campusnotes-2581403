// Case-insensitive search across note titles and bodies.
export function searchNotes(notes = [], query = "") {
  const term = query.trim().toLocaleLowerCase();
  if (!term) return [];
  return notes.filter(note =>
    [note.title, note.body].some(value =>
      typeof value === "string" && value.toLocaleLowerCase().includes(term)
    )
  );
}
