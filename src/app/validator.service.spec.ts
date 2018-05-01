import { TestBed, inject } from '@angular/core/testing';
import { ValidatorService } from './validator.service';

describe('ValidatorService test right upper corner', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidatorService]
    });
  });

  it('should be created', inject([ValidatorService], (service: ValidatorService) => {
    expect(service).toBeTruthy();
  }));

  it('#55 shouldn\'t return no error (empty array)', inject([ValidatorService], (service: ValidatorService) => {
    let testString = '55';
    expect(service.validate('55')).toEqual([]);
  }));

  it('#554 should return an error at line 1', inject([ValidatorService], (service: ValidatorService) => {
    let testString = '554';
    expect(service.validate('554').pop()).toEqual('error at line 1');
  }));

  it('#AB in the first line should be return an error at line 1', inject([ValidatorService], (service: ValidatorService) => {
    let testString = 'AB';
    expect(service.validate(testString).pop()).toEqual('error at line 1');
  }));

});

describe('ValidatorService test starting position and orientation', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidatorService]
    });
  });

  it('#should be created', inject([ValidatorService], (service: ValidatorService) => {
    expect(service).toBeTruthy();
  }));

  it('#55\n should return an error at line 2', inject([ValidatorService], (service: ValidatorService) => {
    let testString = '55\n';
    expect(service.validate(testString).pop()).toEqual('error at line 2');
  }));

  it('#55\n01A should return an error at line 2', inject([ValidatorService], (service: ValidatorService) => {
    let testString = '55\n01A';
    expect(service.validate(testString).pop()).toEqual('error at line 2');
  }));

  it('#55\n01N shouldn\'t return an error at line 2', inject([ValidatorService], (service: ValidatorService) => {
    let testString = '55\n01N';
    expect(service.validate(testString)).toEqual([]);
  }));

});

describe('ValidatorService test instructions', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidatorService]
    });
  });

  it('#55\n01N\nADGGD shouldn\'t return an error', inject([ValidatorService], (service: ValidatorService) => {
    let testString = '55\n01N\nADGGD';
    expect(service.validate(testString)).toEqual([]);
  }));

  it('#55\n01N\nADGGR should return an error at line 3', inject([ValidatorService], (service: ValidatorService) => {
    let testString = '55\n01N\nADGGR';
    expect(service.validate(testString).pop()).toEqual('error at line 3');
  }));

  it('#55\n01N\nshould return an error at line 3', inject([ValidatorService], (service: ValidatorService) => {
    let testString = '55\n01N\n';
    expect(service.validate(testString).pop()).toEqual('error at line 3');
  }));

});

describe('ValidatorService test all in one', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidatorService]
    });
  });

  it('#55\n01B\nADGGR should return an error at lines 2 and 3', inject([ValidatorService], (service: ValidatorService) => {
    let testString = '55\n01B\nADGGR';
    let result = service.validate(testString);
    expect(result.pop()).toEqual('error at line 3');
    expect(result.pop()).toEqual('error at line 2');
  }));

  it('#55\n01B\nADGGR\n should return an error at lines 2, 3 and 4', inject([ValidatorService], (service: ValidatorService) => {
    let testString = '55\n01B\nADGGR\n';
    let result = service.validate(testString);
    expect(result.pop()).toEqual('error at line 4');
    expect(result.pop()).toEqual('error at line 3');
    expect(result.pop()).toEqual('error at line 2');
  }));

  it('#55\n01B\nADGGR\n should return an error at lines 2, 3 and 4', inject([ValidatorService], (service: ValidatorService) => {
    let testString = '55\n01B\nADGGR\n';
    let result = service.validate(testString);
    expect(result.pop()).toEqual('error at line 4');
    expect(result.pop()).toEqual('error at line 3');
    expect(result.pop()).toEqual('error at line 2');
  }));

});