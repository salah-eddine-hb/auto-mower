import { TestBed, inject } from '@angular/core/testing';

import { FileValidatorService } from './file-validator.service';

describe('FileValidatorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FileValidatorService]
    });
  });

  it('should be created', inject([FileValidatorService], (service: FileValidatorService) => {
    expect(service).toBeTruthy();
  }));
});
