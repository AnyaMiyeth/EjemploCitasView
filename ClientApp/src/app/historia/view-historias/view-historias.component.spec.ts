import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHistoriasComponent } from './view-historias.component';

describe('ViewHistoriasComponent', () => {
  let component: ViewHistoriasComponent;
  let fixture: ComponentFixture<ViewHistoriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewHistoriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHistoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
