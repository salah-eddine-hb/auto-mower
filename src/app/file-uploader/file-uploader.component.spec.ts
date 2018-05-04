import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Error } from '../utils/error.enum';
import { ExecutorService } from '../services/executor.service';
import { FileUploaderComponent } from './file-uploader.component';
import { Mower } from '../models/mower.model';
import { Orientation } from '../utils/orientation.enum';
import { Position } from '../models/position.model';
import { ValidatorService } from '../services/validator.service';

describe('FileUploaderComponent', () => {

  let component: FileUploaderComponent;
  let fixture: ComponentFixture<FileUploaderComponent>;

  const validatorServiceSpy = jasmine.createSpyObj('ValidatorService', ['validate']);
  const executorServiceSpy = jasmine.createSpyObj('ExecutorService', ['loadMowers']);

  beforeEach(() => {

    validatorServiceSpy.validate.and.returnValue(['error at line 1']);
    executorServiceSpy.loadMowers.and.returnValue([
      new Mower(new Position(2, 2), Orientation.NORD),
      new Mower(new Position(3, 3), Orientation.SUD)]);

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

  it('#should create', () => {
    expect(component).toBeDefined();
  });

  it('#should print print an error if their is no uploaded file', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const button = bannerElement.querySelector('button');
    button.click();

    expect(component.Errors).toBeDefined();
    expect(component.Errors.length).toEqual(1);
    expect(component.Errors.pop()).toMatch(Error.ERROR_FILE);
  });

  it('#should fire up the the click button event', async(() => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const button = bannerElement.querySelector('button');
    spyOn(component, 'openFile');
    button.click();

    fixture.whenStable().then(() => {
      expect(component.openFile).toHaveBeenCalled();
    })
  }));

  it('#should component errors array contain one element "error at line 1"', async(() => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    let file = new File(['556'], 'input.txt');

    component.openFile(file).then((errors) => {
      expect(errors).toEqual(['error at line 1']);
    })
  }));

  it('#should print an error at line 1 in the file', async(() => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const input = bannerElement.querySelector('input');
    let file = new File(['556'], 'input.txt');

    component.openFile(file).then((errors) => {
      fixture.detectChanges();
      const errs = bannerElement.querySelector('#errors');
      expect(errs.textContent).toMatch(/error at line 1/i);
    })
  }));

  it('#should print all processed mowers as result', () => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    let file = new File(['55\n12N\nGAGAGAGAA\n44S\nGADG'], 'input.txt');
    //validatorServiceSpy.validate.and.returnValue([]);

    component.openFile(file).then((errors) => {
      fixture.detectChanges();
      const errs = bannerElement.querySelector('#errors');
      expect(errs.textContent).toMatch(/error at line 1/i);
    })
  });

});
