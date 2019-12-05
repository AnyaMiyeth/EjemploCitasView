import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHistoriaComponent } from './add-historia.component';

describe('AddHistoriaComponent', () => {
  let component: AddHistoriaComponent;
  let fixture: ComponentFixture<AddHistoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddHistoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddHistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
