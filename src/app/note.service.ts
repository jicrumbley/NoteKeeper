import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Note } from './model/note';
import { Observable } from 'rxjs';

const HttpOptions = {headers: new HttpHeaders
  ({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private http: HttpClient) { }

  private viewNotesUrl = 'http://localhost:8090/NoteDataFetch/rest/note';
  private addNotesUrl = 'http://localhost:8090/NoteDataFetch/rest/note/add';
  private pendUrl = 'http://localhost:8090/NoteDataFetch/rest/note/pend';
  private compUrl = 'http://localhost:8090/NoteDataFetch/rest/note/comp';
  private updateUrl = 'http://localhost:8090/NoteDataFetch/rest/note/update';
  private deleteUrl = 'http://localhost:8090/NoteDataFetch/rest/note/delete';

  public getNotes()
  {
    return this.http.get<Note[]>(this.viewNotesUrl);
  }

  public addNote(n:Note)
  {
    return this.http.post<Note>(this.addNotesUrl, n);
  }

  public statusPend(n:Note)
  {
    return this.http.post<Note>(this.pendUrl, n);
  }

  public statusComp(n:Note)
  {
    return this.http.post<Note>(this.compUrl, n);
  }

  public updateNote(n:Note)
  {
    return this.http.post<Note>(this.updateUrl, n);
  }

  public deleteNote(n:Note)
  {
    return this.http.post<Note>(this.deleteUrl, n);
  }

}
