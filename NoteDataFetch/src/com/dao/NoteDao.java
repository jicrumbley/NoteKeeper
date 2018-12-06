package com.dao;

import java.util.List;
import com.model.*;

public interface NoteDao {
	
	public List<Note> getNotes();
	public int saveNote(Note n);
	public int updateNote(int noteId, String note);
	public int changeStatusPend(int noteId);
	public int changeStatusCompl(int noteId);
	public int deleteNote(int noteId);
	
}
