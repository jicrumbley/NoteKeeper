package com.dao;

import java.util.List;

import com.model.*;
import java.sql.Date;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.*;

public class NoteDaoImpl implements NoteDao {
	
	Connection conn;
	
	public NoteDaoImpl()
	{
		conn = DBUtil.getConnection();
	}
	
	
	@Override
	public List<Note> getNotes() {
		List<Note> nList = new ArrayList<>();
		Statement stmt;
		try {
			stmt = conn.createStatement();
			ResultSet rs = stmt.executeQuery("select * from note");
			while(rs.next())
			{
				Note n = new Note(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getDate(4).toString(), rs.getString(5));
				nList.add(n);
			}
			
		}catch(Exception e)
		{
			e.printStackTrace();
		}
		
		
		return nList;
	}

	@Override
	public int saveNote(Note n) {
		int ret = 0;
		PreparedStatement stmt;
		try {
			stmt = conn.prepareStatement("insert into note values(note_seq.nextval, ?,?, current_date, 'pending')");
			stmt.setString(1, n.getTitle());
			stmt.setString(2, n.getNote());
			ret = stmt.executeUpdate();
			
		}catch(Exception e)
		{
			ret = 0;
		}
		
		return ret;
	}

	@Override
	public int updateNote(int noteId, String note) {
		
		int ret = 0;
		PreparedStatement stmt;
		try {
			stmt = conn.prepareStatement("update note set note = ? where note_id = ?");
			stmt.setString(1, note);
			stmt.setInt(2, noteId);
			ret = stmt.executeUpdate();
			
		}catch(Exception e)
		{
			ret = 0;
		}
		
		return ret;
	}

	@Override
	public int changeStatusPend(int noteId) {
		
		int ret = 0;
		PreparedStatement stmt;
		try {
			stmt = conn.prepareStatement("update note set status = 'pending' where note_id = ?");
			stmt.setInt(1, noteId);
			ret = stmt.executeUpdate();
		}catch(Exception e)
		{
			ret = 0;
		}
		
		return ret;
	}
	
	public int changeStatusCompl(int noteId) {
		
		int ret = 0;
		PreparedStatement stmt;
		try {
			stmt = conn.prepareStatement("update note set status = 'completed' where note_id = ?");
			stmt.setInt(1, noteId);
			ret = stmt.executeUpdate();
		}catch(Exception e)
		{
			ret = 0;
		}
		
		return ret;
	}

	@Override
	public int deleteNote(int noteId) {
		int ret = 0;
		PreparedStatement stmt;
		try {
		stmt = conn.prepareStatement("delete from note where note_id = ?");
		stmt.setInt(1, noteId);
		ret = stmt.executeUpdate();
		
		}catch(Exception e)
		{
			ret = 0;
		}
		return ret;
	}

}
