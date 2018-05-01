import { TestBed, inject } from '@angular/core/testing';
import { ExecutorService } from './executor.service';
import { LoaderService } from './loader.service';

describe('ExecutorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExecutorService, LoaderService]
    });
  });

  it('should be created', inject([ExecutorService], (service: ExecutorService) => {
    service = new ExecutorService(new LoaderService());
    expect(service).toBeTruthy();
  }));
});

