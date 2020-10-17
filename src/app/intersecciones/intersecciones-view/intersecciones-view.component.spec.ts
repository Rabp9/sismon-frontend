import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterseccionesViewComponent } from './intersecciones-view.component';

describe('InterseccionesViewComponent', () => {
  let component: InterseccionesViewComponent;
  let fixture: ComponentFixture<InterseccionesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterseccionesViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterseccionesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
