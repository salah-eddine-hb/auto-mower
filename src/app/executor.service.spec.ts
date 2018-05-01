import { TestBed, inject } from '@angular/core/testing';
import { ExecutorService } from './executor.service';
import { LoaderService } from './loader.service';
import { Mower } from './Mower';
import { Position } from './Position.enum';
import { Orientation } from './Orientation.enum';

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

describe('ExecutorService test move forward', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExecutorService, LoaderService]
    });
  });

  it('should be move forward', inject([ExecutorService], (service: ExecutorService) => {
    service = new ExecutorService(new LoaderService());
    const results = service.loadMowers('55\n22N\nA');
    expect(results).toBeTruthy();
  }));

  it('shouldn\'t be move forward', inject([ExecutorService], (service: ExecutorService) => {
    service = new ExecutorService(new LoaderService());
    expect(service).toBeTruthy();
  }));
});

