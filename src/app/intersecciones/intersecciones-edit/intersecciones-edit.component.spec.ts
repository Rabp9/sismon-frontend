import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterseccionesEditComponent } from './intersecciones-edit.component';

describe('InterseccionesEditComponent', () => {
  let component: InterseccionesEditComponent;
  let fixture: ComponentFixture<InterseccionesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterseccionesEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterseccionesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
