import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteTratamientosComponent } from './delete-tratamientos.component';

describe('DeleteTratamientosComponent', () => {
  let component: DeleteTratamientosComponent;
  let fixture: ComponentFixture<DeleteTratamientosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteTratamientosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteTratamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
