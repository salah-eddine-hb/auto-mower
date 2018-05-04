import { TestBed, inject } from '@angular/core/testing';

import { ExecutorService } from './executor.service';
import { LoaderService } from './loader.service';

import { Orientation } from './orientation.enum';
import { Instruction } from './instruction.enum';

import { Position } from './position.model';
import { Mower } from './mower.model';

  describe('ExecutorService test move forward', () => {
    const loaderServiceSpy = jasmine.createSpyObj('LoaderService', ['loadMowers', 'getCorner']);
    const mower = new Mower(new Position(2,2), Orientation.NORD);
    mower.Instructions = [Instruction.FORWARD];
    const cornersValue = new Position(5,5);
    loaderServiceSpy.getCorner.and.returnValue(cornersValue);

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          ExecutorService,
          { provide: LoaderService, useValue: loaderServiceSpy }
        ]
      });
      mower.Position.X = 2;
      mower.Position.Y = 2;
    });  

    it('should be created', inject([ExecutorService], (service: ExecutorService) => {
      expect(service).toBeTruthy();
    }));

    it('#should move forward and increment Y by one', inject([ExecutorService], (service: ExecutorService) => {
      const mowersValue = [mower];
      loaderServiceSpy.loadMowers.and.returnValue(mowersValue);
      const mowers = service.loadMowers('55\n22N\nA');

      expect(mowers[0].Position.Y).toEqual(3);
      expect(mowers[0].Position.X).toEqual(2);
    }));

    it('#should move forward and increment X by one',  inject([ExecutorService], (service: ExecutorService) => {
      mower.Orientation = Orientation.EST;
      const mowersValue = [mower];
      loaderServiceSpy.loadMowers.and.returnValue(mowersValue);

      const mowers = service.loadMowers('55\n22E\nA');

      expect(mowers[0].Position.Y).toEqual(2);
      expect(mowers[0].Position.X).toEqual(3);
    }));

    it('#should move backward and de-increment Y by one',  inject([ExecutorService], (service: ExecutorService) => {
      mower.Orientation = Orientation.SUD;
      const mowersValue = [mower];
      loaderServiceSpy.loadMowers.and.returnValue(mowersValue);

      const mowers = service.loadMowers('55\n22S\nA');

      expect(mowers[0].Position.Y).toEqual(1);
      expect(mowers[0].Position.X).toEqual(2);
    }));

    it('#should move backward and de-increment X by one',  inject([ExecutorService], (service: ExecutorService) => {
      mower.Orientation = Orientation.WEST;
      const mowersValue = [mower];
      loaderServiceSpy.loadMowers.and.returnValue(mowersValue);

      const mowers = service.loadMowers('55\n22W\nA');

      expect(mowers[0].Position.Y).toEqual(2);
      expect(mowers[0].Position.X).toEqual(1);
    }));

    it('#shouldn\'t move forward if you passe the right side of the square',  inject([ExecutorService], (service: ExecutorService) => {
      mower.Orientation = Orientation.EST;
      mower.Position.X = 5;
      mower.Position.Y = 2;
      const mowersValue = [mower];
      loaderServiceSpy.loadMowers.and.returnValue(mowersValue);

      const mowers = service.loadMowers('55\n25E\nA');

      expect(mowers[0].Position.Y).toEqual(2);
      expect(mowers[0].Position.X).toEqual(5);
    }));

    it('#shouldn\'t move forward if you passe the left side of the square',  inject([ExecutorService], (service: ExecutorService) => {
      mower.Orientation = Orientation.WEST;
      mower.Position.X = 0;
      mower.Position.Y = 2;
      const mowersValue = [mower];
      loaderServiceSpy.loadMowers.and.returnValue(mowersValue);

      const mowers = service.loadMowers('55\n25W\nA');

      expect(mowers[0].Position.Y).toEqual(2);
      expect(mowers[0].Position.X).toEqual(0);
    }));

    it('#shouldn\'t move forward if you passe the upper side of the square',  inject([ExecutorService], (service: ExecutorService) => {
      mower.Orientation = Orientation.NORD;
      mower.Position.X = 2;
      mower.Position.Y = 5;
      const mowersValue = [mower];
      loaderServiceSpy.loadMowers.and.returnValue(mowersValue);

      const mowers = service.loadMowers('55\n25N\nA');

      expect(mowers[0].Position.Y).toEqual(5);
      expect(mowers[0].Position.X).toEqual(2);
    }));

    it('#shouldn\'t move forward if you passe the bottom side of the square',  inject([ExecutorService], (service: ExecutorService) => {
      mower.Orientation = Orientation.SUD;
      mower.Position.X = 2;
      mower.Position.Y = 0;
      const mowersValue = [mower];
      loaderServiceSpy.loadMowers.and.returnValue(mowersValue);

      const mowers = service.loadMowers('55\n25S\nA');

      expect(mowers[0].Position.Y).toEqual(0);
      expect(mowers[0].Position.X).toEqual(2);
    }));
  
});

