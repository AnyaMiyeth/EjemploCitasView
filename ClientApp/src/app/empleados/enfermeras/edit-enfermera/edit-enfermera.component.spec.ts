import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEnfermeraComponent } from './edit-enfermera.component';

describe('EditEnfermeraComponent', () => {
  let component: EditEnfermeraComponent;
  let fixture: ComponentFixture<EditEnfermeraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEnfermeraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEnfermeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
