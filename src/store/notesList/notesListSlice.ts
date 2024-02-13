import { createSlice } from "@reduxjs/toolkit";
import { Note } from "../../types/note";

interface NoteState {
  mainNotes: Note[],
  archiveNotes: Note[],
  trashNotes: Note[],
  editNotes: null | Note[],
}

const initialState: NoteState = {
  mainNotes: [],
  archiveNotes: [],
  trashNotes: [],
  editNotes: null,
}

const notesListSlice = createSlice({
  name:"notesList",
  initialState,
  reducers: {}
})

export default notesListSlice.reducer