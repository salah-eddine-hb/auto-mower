import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionsFileUploaderComponent } from './instructions-file-uploader.component';

describe('InstructionsFileUploaderComponent', () => {
  let component: InstructionsFileUploaderComponent;
  let fixture: ComponentFixture<InstructionsFileUploaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstructionsFileUploaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionsFileUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
