import { Component, OnInit } from '@angular/core';
import { NoteService } from './note.service';
import { Note } from './model/note';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Note Manager';
  
  constructor() { }

  ngOnInit()
  {
  }

 

}
