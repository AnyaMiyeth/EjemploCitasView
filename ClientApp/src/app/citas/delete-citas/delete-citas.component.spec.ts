import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCitasComponent } from './delete-citas.component';

describe('DeleteCitasComponent', () => {
  let component: DeleteCitasComponent;
  let fixture: ComponentFixture<DeleteCitasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteCitasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCitasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
