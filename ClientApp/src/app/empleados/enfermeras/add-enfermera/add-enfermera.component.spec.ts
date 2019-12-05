import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEnfermeraComponent } from './add-enfermera.component';

describe('AddEnfermeraComponent', () => {
  let component: AddEnfermeraComponent;
  let fixture: ComponentFixture<AddEnfermeraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEnfermeraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEnfermeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
