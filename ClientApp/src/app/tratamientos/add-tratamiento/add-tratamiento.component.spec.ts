import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTratamientoComponent } from './add-tratamiento.component';

describe('AddTratamientoComponent', () => {
  let component: AddTratamientoComponent;
  let fixture: ComponentFixture<AddTratamientoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTratamientoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTratamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
