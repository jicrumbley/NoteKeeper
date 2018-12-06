import { Component, OnInit } from '@angular/core';
import { NoteService } from '../note.service';
import { Note } from '../model/note';
import { Router } from '@angular/router';


@Component({
  selector: 'app-noteviewcmp',
  templateUrl: './noteviewcmp.component.html',
  styleUrls: ['./noteviewcmp.component.css']
})
export class NoteviewcmpComponent implements OnInit {

  noteArr:Note[]=[];
  showsave:boolean = false;
  tempid;
  constructor(private service: NoteService, private route:Router) {
    
   }

  ngOnInit() {
    this.getNotes();
  
  }

  getNotes()
  {
   
    this.service.getNotes().subscribe(data => {
      this.noteArr = data;  
    });
   
  }

  checkStatus(status)
  {
    if(status == 'pending')
      return false;
    else
      return true;
  }

  changeStatus(id)
  {
    
    let checked:boolean = (document.getElementById(id+"check") as HTMLInputElement).checked;
    if(checked)
    {
      for(let i = 0; i < this.noteArr.length; i++)
      {
        if(this.noteArr[i].noteId == id)
        {
          this.service.statusComp(this.noteArr[i]).subscribe(()=> this.ngOnInit());
          //this.noteArr[i].status = 'completed';
        }
      }
    }
    else
    {
      for(let i = 0; i < this.noteArr.length; i++)
      {
        if(this.noteArr[i].noteId == id)
        {
          this.service.statusPend(this.noteArr[i]).subscribe(()=> this.ngOnInit());
          //this.noteArr[i].status = 'pending';
        }
      }
    }

    
  }

  editNote(id)
  {
    if(this.tempid != null)
    {
      alert("Please save pending note");
    }
    else
    {
    this.tempid = id;
    let n;
    for(let i = 0; i < this.noteArr.length; i++)
    {
      if(this.noteArr[i].noteId == id)
        n = this.noteArr[i].note;
    }

    (document.getElementById(id+"out") as HTMLElement).innerHTML = "<textarea id=\"" + id + "box\" cols=\"100\" rows=\"10\">" + n + "</textarea>";
    this.showsave = true;
    } 
  }

  saveNote(id)
  {
    let n = (document.getElementById(id+"box") as HTMLTextAreaElement).value;
    for(let i = 0; i < this.noteArr.length; i++)
    {
      if(this.noteArr[i].noteId == id)
      {
        this.noteArr[i].note = n;
        this.service.updateNote(this.noteArr[i]).subscribe(() => this.ngOnInit());
      }
    }
    (document.getElementById(id+"out") as HTMLElement).innerText = n;
    this.showsave = false;
    this.tempid = null;
  }

  deleteNote(id)
  {
    let comf = confirm("Are you sure you want to delete this note?");
    if(comf)
    {
      for(let i = 0; i < this.noteArr.length; i++)
      {
        if(this.noteArr[i].noteId == id)
        {
          this.service.deleteNote(this.noteArr[i]).subscribe(() => this.ngOnInit());
        }
      }
    }

  }

}
