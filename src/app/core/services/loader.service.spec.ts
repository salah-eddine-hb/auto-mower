import { TestBed, inject } from '@angular/core/testing';

import { LoaderService } from './loader.service';
import { Orientation } from '../enums/orientation.enum';

describe('LoaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoaderService]
    });
  });

  it('should be created', inject([LoaderService], (service: LoaderService) => {
    expect(service).toBeTruthy();
  }));

  it('Should return an array of two mowers', inject([LoaderService], (service: LoaderService) => {
    let testString = '55\n22S\nAA\n33N\nAA';
    expect(service.loadMowers(testString).length).toEqual(2);
  }));

  it('Should return an array of two mowers with identique position/orientation from the file', inject([LoaderService], (service: LoaderService) => {
    let testString = '55\n22S\nAA\n33N\nAA';

    expect(service.loadMowers(testString)[0].Orientation).toEqual(Orientation.SUD);
    expect(service.loadMowers(testString)[0].Position.X).toEqual(2);
    expect(service.loadMowers(testString)[0].Position.Y).toEqual(2);

    expect(service.loadMowers(testString)[1].Orientation).toEqual(Orientation.NORD);
    expect(service.loadMowers(testString)[1].Position.X).toEqual(3);
    expect(service.loadMowers(testString)[1].Position.Y).toEqual(3);
  }));

  it('Should throw an error if their is an invalid position value', inject([LoaderService], (service: LoaderService) => {
    let testString = '55\nL2S\nAA\n33N\nAA';
    expect(function(){service.loadMowers(testString)}).toThrow(new Error("Error parsing mower position data from file"));
  }));

  it('Should throw an error if their is an invalid orientation value', inject([LoaderService], (service: LoaderService) => {
    let testString = '55\n22L\nAA\n33N\nAA';
    expect(function(){service.loadMowers(testString)}).toThrow(new Error("Error parsing mower orientation data from file"));
  }));

  it('Should throw an error if their is an invalid position value that passe the corner value', inject([LoaderService], (service: LoaderService) => {
    let testString = '55\n66S\nAA\n33N\nAA';
    expect(function(){service.loadMowers(testString)}).toThrow(new Error("Error parsing mower position data from file"));
  }));

  it('Should throw an error if their is an invalid instruction value', inject([LoaderService], (service: LoaderService) => {
    let testString = '55\n22N\nAO\n33N\nAA';
    expect(function(){service.loadMowers(testString)}).toThrow(new Error("Error parsing mower instructions data from file"));
  }));

});
