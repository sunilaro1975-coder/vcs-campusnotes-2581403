import test from "node:test";
import assert from "node:assert/strict";
import { searchNotes } from "../src/search.js";

test("searches titles and bodies without case sensitivity", () => {
  const notes = [{title:"Version Control",body:"Git basics"},{title:"Other",body:"Unrelated"}];
  assert.deepEqual(searchNotes(notes, "GIT"), [notes[0]]);
});
test("returns no results for an empty query", () => {
  assert.deepEqual(searchNotes([{title:"A",body:"B"}], "  "), []);
});
