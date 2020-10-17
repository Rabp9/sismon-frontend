import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterseccionesMapComponent } from './intersecciones-map.component';

describe('InterseccionesMapComponent', () => {
  let component: InterseccionesMapComponent;
  let fixture: ComponentFixture<InterseccionesMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterseccionesMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterseccionesMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
