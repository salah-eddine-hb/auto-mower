import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Error } from '../core/enums/error.enum';
import { ExecutorService } from '../core/services/executor.service';
import { FileUploaderComponent } from './file-uploader.component';
import { Mower } from '../core/models/mower.model';
import { Orientation } from '../core/enums/orientation.enum';
import { Position } from '../core/models/position.model';
import { ValidatorService } from '../core/services/validator.service';

describe('FileUploaderComponent - case where file have errors', () => {

  let component: FileUploaderComponent;
  let fixture: ComponentFixture<FileUploaderComponent>;

  const validatorServiceSpy = jasmine.createSpyObj('ValidatorService', ['validate']);
  const executorServiceSpy = jasmine.createSpyObj('ExecutorService', ['loadMowers']);

  beforeEach(() => {

    validatorServiceSpy.validate.and.returnValue(['1 ' + Error.ERROR_CORNER]);
    executorServiceSpy.loadMowers.and.returnValue([]);

    TestBed.configureTestingModule({
      declarations: [FileUploaderComponent],
      providers: [
        FileUploaderComponent,
        { provide: ValidatorService, useValue: validatorServiceSpy },
        { provide: ExecutorService, useValue: executorServiceSpy }
      ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should get an error if their is no uploaded file', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const button = bannerElement.querySelector('button');
    button.click();

    expect(component.Errors).toBeDefined();
    expect(component.Errors.length).toEqual(1);
    expect(component.Errors.pop()).toMatch(Error.ERROR_FILE);
  });

  it('should fire up the the click button event', async(() => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const button = bannerElement.querySelector('button');
    spyOn(component, 'openFile');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.openFile).toHaveBeenCalled();
    })
  }));

  it('should get an error parsing corner value at line 1', async(() => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    let file = new File(['556'], 'input.txt');

    component.openFile(file).then((errors) => {
      expect(errors).toEqual(['1 Error parsing the corner value']);
    })
  }));

  it('should print an error parsing corner value at line 1', async(() => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const input = bannerElement.querySelector('input');
    let file = new File(['556'], 'input.txt');

    component.openFile(file).then((errors) => {
      fixture.detectChanges();
      const errs = bannerElement.querySelector('#errors');
      expect(errs.textContent).toMatch(/1 Error parsing the corner value/i);
    })
  }));

});

describe('FileUploaderComponent - upload a valid input file', () => {

  let component: FileUploaderComponent;
  let fixture: ComponentFixture<FileUploaderComponent>;

  const validatorServiceSpy = jasmine.createSpyObj('ValidatorService', ['validate']);
  const executorServiceSpy = jasmine.createSpyObj('ExecutorService', ['loadMowers']);

  beforeEach(() => {

    validatorServiceSpy.validate.and.returnValue([]);
    executorServiceSpy.loadMowers.and.returnValue([new Mower(new Position(2, 2), Orientation.NORD)]);

    TestBed.configureTestingModule({
      declarations: [FileUploaderComponent],
      providers: [
        FileUploaderComponent,
        { provide: ValidatorService, useValue: validatorServiceSpy },
        { provide: ExecutorService, useValue: executorServiceSpy }
      ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should print the processed mowers as result X = val1, Y = val2, Orientation = val3', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    let file = new File(['55\n20N\nAA'], 'input.txt');

    component.openFile(file).then((errors) => {
      fixture.detectChanges();
      const result = bannerElement.querySelector('#mowers');
      expect(result.textContent).toMatch(/X = 2, Y = 2, Orientation = 0/i);
    })
  });

  it('should contain result as X Y Orientation', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    let file = new File(['55\n20N\nAA'], 'input.txt');

    component.openFile(file).then((errors) => {
      fixture.detectChanges();
      expect(component.Mowers.pop().Position.X).toEqual(2);
      expect(component.Mowers.pop().Position.Y).toEqual(2);
      expect(component.Mowers.pop().Orientation).toEqual(0);
    })
  });

});