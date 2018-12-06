import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteaddcmpComponent } from './noteaddcmp.component';

describe('NoteaddcmpComponent', () => {
  let component: NoteaddcmpComponent;
  let fixture: ComponentFixture<NoteaddcmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteaddcmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteaddcmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
