import { TestBed, inject } from '@angular/core/testing';
import { Loader } from './loader.service';

describe('Loader', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Loader]
    });
  });

  it('should be created', inject([Loader], (service: Loader) => {
    expect(service).toBeTruthy();
  }));
});
