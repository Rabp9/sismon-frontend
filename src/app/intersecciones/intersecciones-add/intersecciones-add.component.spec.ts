import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterseccionesAddComponent } from './intersecciones-add.component';

describe('InterseccionesAddComponent', () => {
  let component: InterseccionesAddComponent;
  let fixture: ComponentFixture<InterseccionesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterseccionesAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterseccionesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
