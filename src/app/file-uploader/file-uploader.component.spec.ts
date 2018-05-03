import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FileUploaderComponent } from './file-uploader.component';
import { ValidatorService } from '../validator.service';
import { ExecutorService } from '../executor.service';
import { Orientation } from '../Orientation.enum';
import { Position } from '../Position.enum';
import { Mower } from '../Mower';

describe('FileUploaderComponent', () => {

  it('should create', () => {
    const validatorServiceSpy = jasmine.createSpyObj('ValidatorService', ['validate']);
    const executorServiceSpy = jasmine.createSpyObj('ExecutorService', ['loadMowers']);
    validatorServiceSpy.validate.and.returnValue([]);
    executorServiceSpy.loadMowers.and.returnValue([new Mower(new Position(2,2), Orientation.NORD)]);
    TestBed.configureTestingModule({
      declarations: [ FileUploaderComponent ],
      providers: [
        FileUploaderComponent,
        { provide: ValidatorService, useValue: validatorServiceSpy },
        { provide: ExecutorService, useValue: executorServiceSpy }
      ]
    });
    const fixture = TestBed.createComponent(FileUploaderComponent);
    const component = fixture.componentInstance;
    expect(component).toBeDefined();
  });

  // let component: FileUploaderComponent;
  // let fixture: ComponentFixture<FileUploaderComponent>;

  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     declarations: [ FileUploaderComponent ]
  //   })
  //   .compileComponents();
  // }));

  // beforeEach(() => {
  //   fixture = TestBed.createComponent(FileUploaderComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
