// Minimal CampusNotes domain module used for the VCS assignment.
export function createNote(title, body) {
  if (!title || !title.trim()) throw new Error("A note title is required");
  return { id: Date.now(), title: title.trim(), body: body ?? "", createdAt: new Date().toISOString() };
}
export function listNotes(notes = []) {
  return [...notes].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}
