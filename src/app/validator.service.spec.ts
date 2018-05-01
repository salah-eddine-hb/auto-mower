import { TestBed, inject } from '@angular/core/testing';

import { ValidatorService } from './validator.service';

describe('ValidatorService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidatorService]
    });
  });

  it('should be created', inject([ValidatorService], (service: ValidatorService) => {
    let s = new ValidatorService();
    expect(s).toBeTruthy();
  }));

  it('should be return no error (empty array)', inject([ValidatorService], (service: ValidatorService) => {
    expect(service.validate('55')).toEqual([]);
  }));

  it('should be return one error', inject([ValidatorService], (service: ValidatorService) => {
    expect(service.validate('554').length).toEqual(1);
  }));

  it('should be return true', inject([ValidatorService], (service: ValidatorService) => {
    expect(service.validate('55')).toBeTruthy();
  }));

});
