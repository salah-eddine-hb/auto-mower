import { TestBed, inject } from '@angular/core/testing';
import { ExecutorService } from './executor.service';
import { LoaderService } from './loader.service';
import { Mower } from './Mower';
import { Position } from './Position.enum';
import { Orientation } from './Orientation.enum';
import { Instruction } from './Instruction.enum';

// describe('ExecutorService', () => {
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [ExecutorService, LoaderService]
//     });
//   });

  // it('should be created', inject([ExecutorService], (service: ExecutorService) => {
  //   service = new ExecutorService(new LoaderService());
  //   expect(service).toBeTruthy();
  // }));

// });

describe('ExecutorService test move forward', () => {
  // beforeEach(() => {
  //   TestBed.configureTestingModule({
  //     providers: [ExecutorService]
  //   });
  // });

  it('#should move forward and increment Y by one', () => {
    const valueServiceSpy = jasmine.createSpyObj('LoaderService', ['loadMowers', 'getCorner']);
    const mower = new Mower(new Position(2,2), Orientation.NORD);
    mower.Instructions = [Instruction.FORWARD];
    const stubValue1 = [mower];
    const stubValue2 = new Position(5,5);
    valueServiceSpy.loadMowers.and.returnValue(stubValue1);
    valueServiceSpy.getCorner.and.returnValue(stubValue2);

    const service = new ExecutorService(valueServiceSpy);
    const mowers = service.loadMowers('55\n22N\nA');
    expect(mowers[0].Position.Y).toEqual(3);
    expect(mowers[0].Position.X).toEqual(2);
  });

  it('#should move forward and increment X by one', () => {
    const valueServiceSpy = jasmine.createSpyObj('LoaderService', ['loadMowers', 'getCorner']);
    const mower = new Mower(new Position(2,2), Orientation.EST);
    mower.Instructions = [Instruction.FORWARD];
    const stubValue1 = [mower];
    const stubValue2 = new Position(5,5);
    valueServiceSpy.loadMowers.and.returnValue(stubValue1);
    valueServiceSpy.getCorner.and.returnValue(stubValue2);

    const service = new ExecutorService(valueServiceSpy);
    const mowers = service.loadMowers('55\n22E\nA');
    expect(mowers[0].Position.Y).toEqual(2);
    expect(mowers[0].Position.X).toEqual(3);
  });

  it('#should move forward and de-increment Y by one', () => {
    const valueServiceSpy = jasmine.createSpyObj('LoaderService', ['loadMowers', 'getCorner']);
    const mower = new Mower(new Position(2,2), Orientation.SUD);
    mower.Instructions = [Instruction.FORWARD];
    const stubValue1 = [mower];
    const stubValue2 = new Position(5,5);
    valueServiceSpy.loadMowers.and.returnValue(stubValue1);
    valueServiceSpy.getCorner.and.returnValue(stubValue2);

    const service = new ExecutorService(valueServiceSpy);
    const mowers = service.loadMowers('55\n22S\nA');
    expect(mowers[0].Position.Y).toEqual(1);
    expect(mowers[0].Position.X).toEqual(2);
  });

  it('#should move forward and de-increment X by one', () => {
    const valueServiceSpy = jasmine.createSpyObj('LoaderService', ['loadMowers', 'getCorner']);
    const mower = new Mower(new Position(2,2), Orientation.WEST);
    mower.Instructions = [Instruction.FORWARD];
    const stubValue1 = [mower];
    const stubValue2 = new Position(5,5);
    valueServiceSpy.loadMowers.and.returnValue(stubValue1);
    valueServiceSpy.getCorner.and.returnValue(stubValue2);

    const service = new ExecutorService(valueServiceSpy);
    const mowers = service.loadMowers('55\n22W\nA');
    expect(mowers[0].Position.Y).toEqual(2);
    expect(mowers[0].Position.X).toEqual(1);
  });

  // it('shouldn\'t move forward if the mower exceeds the upper side', inject([ExecutorService], (service: ExecutorService) => {
  //   service = new ExecutorService(new LoaderService());
  //   expect(service).toBeTruthy();
  // }));

  // it('shouldn\'t move forward if the mower exceeds the bottom side', inject([ExecutorService], (service: ExecutorService) => {
  //   service = new ExecutorService(new LoaderService());
  //   expect(service).toBeTruthy();
  // }));

  // it('shouldn\'t move forward if the mower exceeds the left side', inject([ExecutorService], (service: ExecutorService) => {
  //   service = new ExecutorService(new LoaderService());
  //   expect(service).toBeTruthy();
  // }));

  // it('shouldn\'t move forward if the mower exceeds the right side', inject([ExecutorService], (service: ExecutorService) => {
  //   service = new ExecutorService(new LoaderService());
  //   expect(service).toBeTruthy();
  // }));
});

