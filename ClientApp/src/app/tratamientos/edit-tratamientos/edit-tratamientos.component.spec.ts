import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTratamientosComponent } from './edit-tratamientos.component';

describe('EditTratamientosComponent', () => {
  let component: EditTratamientosComponent;
  let fixture: ComponentFixture<EditTratamientosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTratamientosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTratamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
