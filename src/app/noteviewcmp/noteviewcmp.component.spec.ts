import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteviewcmpComponent } from './noteviewcmp.component';

describe('NoteviewcmpComponent', () => {
  let component: NoteviewcmpComponent;
  let fixture: ComponentFixture<NoteviewcmpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteviewcmpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteviewcmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
