import { TestBed } from '@angular/core/testing';

import { InterseccionesService } from './intersecciones.service';

describe('InterseccionesService', () => {
  let service: InterseccionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterseccionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
