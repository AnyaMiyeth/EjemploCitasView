import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteHoraComponent } from './delete-hora.component';

describe('DeleteHoraComponent', () => {
  let component: DeleteHoraComponent;
  let fixture: ComponentFixture<DeleteHoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteHoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteHoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
