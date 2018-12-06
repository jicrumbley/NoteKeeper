package com.resources;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.dao.NoteDaoImpl;
import com.model.*;

@Path("note")
public class NoteResources {
	
	NoteDaoImpl nd;
	
	public NoteResources()
	{
		nd = new NoteDaoImpl();
	}
	
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Note> getNotes()
	{
		return nd.getNotes();
	}
	
	@POST
	@Path("add")
	@Produces(MediaType.APPLICATION_JSON)
	public void addNote(Note n)
	{
		int ret = 0;
		ret = nd.saveNote(n);
		if(ret == 0)
		{
			System.out.println("Error: No rows effected");
		}
	}
	
	@POST
	@Path("comp")
	@Produces(MediaType.APPLICATION_JSON)
	public void statusCompl(Note n)
	{
		int ret = 0;
		ret = nd.changeStatusCompl(n.getNoteId());
		if(ret == 0)
		{
			System.out.println("Error: No rows effected");
		}
	}
	
	@POST
	@Path("pend")
	@Produces(MediaType.APPLICATION_JSON)
	public void statusPend(Note n)
	{
		int ret = 0;
		ret = nd.changeStatusPend(n.getNoteId());
		if(ret == 0)
		{
			System.out.println("Error: No rows effected");
		}
	}
	
	@POST
	@Path("update")
	@Produces(MediaType.APPLICATION_JSON)
	public void updateNote(Note n)
	{
		int ret = 0;
		ret = nd.updateNote(n.getNoteId(), n.getNote());
		if(ret == 0)
		{
			System.out.println("Error: No rows effected");
		}
	}
	
	@POST
	@Path("delete")
	@Produces(MediaType.APPLICATION_JSON)
	public void deleteNote(Note n)
	{
		int ret = 0;
		ret = nd.deleteNote(n.getNoteId());
		if(ret == 0)
		{
			System.out.println("Error: No rows effected");
		}
	}
	
}
