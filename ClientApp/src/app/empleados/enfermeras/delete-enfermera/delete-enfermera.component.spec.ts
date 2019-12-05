import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteEnfermeraComponent } from './delete-enfermera.component';

describe('DeleteEnfermeraComponent', () => {
  let component: DeleteEnfermeraComponent;
  let fixture: ComponentFixture<DeleteEnfermeraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteEnfermeraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteEnfermeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
