import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterseccionesComponent } from './intersecciones.component';

describe('InterseccionesComponent', () => {
  let component: InterseccionesComponent;
  let fixture: ComponentFixture<InterseccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterseccionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterseccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
