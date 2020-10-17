import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterseccionesListComponent } from './intersecciones-list.component';

describe('InterseccionesListComponent', () => {
  let component: InterseccionesListComponent;
  let fixture: ComponentFixture<InterseccionesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterseccionesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterseccionesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
