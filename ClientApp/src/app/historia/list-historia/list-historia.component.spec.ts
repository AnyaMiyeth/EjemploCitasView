import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHistoriaComponent } from './list-historia.component';

describe('ListHistoriaComponent', () => {
  let component: ListHistoriaComponent;
  let fixture: ComponentFixture<ListHistoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListHistoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListHistoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
