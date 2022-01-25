import { TestBed } from '@angular/core/testing';

import { ListeVoyagesService } from './liste-voyages.service';

describe('ListeVoyagesService', () => {
  let service: ListeVoyagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListeVoyagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
