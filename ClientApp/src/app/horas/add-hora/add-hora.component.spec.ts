import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHoraComponent } from './add-hora.component';

describe('AddHoraComponent', () => {
  let component: AddHoraComponent;
  let fixture: ComponentFixture<AddHoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
