import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditHistoriaComponent } from './edit-historia.component';

describe('EditHistoriaComponent', () => {
  let component: EditHistoriaComponent;
  let fixture: ComponentFixture<EditHistoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditHistoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditHistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
