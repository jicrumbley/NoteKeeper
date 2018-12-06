import { Component, OnInit } from '@angular/core';
import { Note } from '../model/note';
import { NoteService } from '../note.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-noteaddcmp',
  templateUrl: './noteaddcmp.component.html',
  styleUrls: ['./noteaddcmp.component.css']
})
export class NoteaddcmpComponent implements OnInit {
  formdata;
  note:Note;
  constructor(private service:NoteService, private route: Router) { }

  ngOnInit() {
    this.formdata = new FormGroup({
      title: new FormControl('', Validators.compose([
        Validators.required
      ])),
      note: new FormControl('', Validators.compose([
        Validators.required
      ]))
    }); 
  }

  onClickSubmit(data)
  {
    this.note = data;
    this.addNote();
  }

  addNote()
  {
    this.service.addNote(this.note).subscribe((data) => {this.route.navigate([''])});
  }

}
