import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEnfermeraComponent } from './list-enfermera.component';

describe('ListEnfermeraComponent', () => {
  let component: ListEnfermeraComponent;
  let fixture: ComponentFixture<ListEnfermeraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListEnfermeraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEnfermeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
