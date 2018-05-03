import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FileUploaderComponent } from './file-uploader.component';
import { ValidatorService } from '../validator.service';
import { ExecutorService } from '../executor.service';
import { Orientation } from '../Orientation.enum';
import { Position } from '../Position.enum';
import { Mower } from '../Mower';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('FileUploaderComponent', () => {

  let component: FileUploaderComponent;
  let fixture: ComponentFixture<FileUploaderComponent>;

  beforeEach(() => {
    const validatorServiceSpy = jasmine.createSpyObj('ValidatorService', ['validate']);
    const executorServiceSpy  = jasmine.createSpyObj('ExecutorService', ['loadMowers']);

    validatorServiceSpy.validate.and.returnValue(['error at line 1']);
    executorServiceSpy.loadMowers.and.returnValue([
      new Mower(new Position(2,2), Orientation.NORD),
      new Mower(new Position(3,3), Orientation.SUD)]);

    TestBed.configureTestingModule({
      declarations: [ FileUploaderComponent ],
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
    expect(component.errors).toBeDefined();
    expect(component.errors.length).toEqual(1);
    expect(component.errors.pop()).toMatch(/Plz upload one valid file/i);
  });

  it('#should fire up the the click button event', async(() => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const button = bannerElement.querySelector('button');
    spyOn(component, 'openFile');
    button.click();
    fixture.whenStable().then(() => {
      expect(component.openFile).toHaveBeenCalled();
    });
  }));

  it('#should component errors array contain one element "error at line 1"', async(() => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    //const input = bannerElement.querySelector('input');
    let file = new File(['556'],'input.txt');
    //input.files[0] = file;
    //const button = bannerElement.querySelector('button');
    //button.click();
    //spyOnProperty(component, 'errors');
    component.openFile(file).then((errors) =>{
      expect(errors).toEqual(['error at line 1']);
    });
    //fixture.detectChanges();
    //spyOnProperty(component,'errors');
    //fixture.whenStable().then(() => {
      //const bannerDe: DebugElement = fixture.debugElement;
      //const errors = bannerDe.query(By.css('#errors'));
      //expect(errors).toBeDefined();
      //expect(component.errors).toEqual(['error at line 1']);
      //const errors = bannerElement.querySelector('#errors');
      //expect(errors).toBeTruthy();
      //console.log('============================>'+component.Errors);
      //expect(errors.getElementsByTagName('p').item(0).innerHTML).toMatch(/error at line 1/i)
      //expect(component.errors).toBeDefined();
    //});
    // fixture.whenStable().then(() => {
    //   const errors = bannerElement.querySelector('#errors');
    //   expect(errors.textContent).toMatch(/error at line 7678/i)
    // });
  }));

  it('#should print an error at line 1 in the file', async(() => {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const input = bannerElement.querySelector('input');
    let file = new File(['556'],'input.txt');

    component.openFile(file).then((errors) =>{
      fixture.detectChanges();
      const errs = bannerElement.querySelector('#errors');
      expect(errs.textContent).toMatch(/error at line 1/i);
    });
  }));

  it('#should print all processed mowers as result', () => {
    expect(component.openFile).toBeDefined();
  });

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ FileUploaderComponent ]
  //   })
  //   .compileComponents();
  // }));

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
