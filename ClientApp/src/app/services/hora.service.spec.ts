import { TestBed } from '@angular/core/testing';

import { HoraService } from './hora.service';

describe('HoraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HoraService = TestBed.get(HoraService);
    expect(service).toBeTruthy();
  });
});
