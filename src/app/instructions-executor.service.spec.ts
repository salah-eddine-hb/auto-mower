import { TestBed, inject } from '@angular/core/testing';

import { InstructionsExecutorService } from './instructions-executor.service';

describe('InstructionsExecutorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InstructionsExecutorService]
    });
  });

  it('should be created', inject([InstructionsExecutorService], (service: InstructionsExecutorService) => {
    expect(service).toBeTruthy();
  }));
});
