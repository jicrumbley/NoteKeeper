import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteService } from './note.service';
import { HttpClientModule } from '@angular/common/http';
import { NoteviewcmpComponent } from './noteviewcmp/noteviewcmp.component';
import { NoteaddcmpComponent } from './noteaddcmp/noteaddcmp.component';
import { ReactiveFormsModule} from '@angular/forms';
import { FormsModule } from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    NoteviewcmpComponent,
    NoteaddcmpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
