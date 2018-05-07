import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { FileUploaderComponent } from './file-uploader/file-uploader.component';
import { ValidatorService } from './shared/services/validator.service';
import { ExecutorService } from './shared/services/executor.service';
import { LoaderService } from './shared/services/loader.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        FileUploaderComponent,
      ],
      providers: [
        FileUploaderComponent,
        { provide: ValidatorService, useClass: ValidatorService },
        { provide: ExecutorService, useClass: ExecutorService },
        { provide: LoaderService, useClass: LoaderService }
      ]           
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.Title).toEqual('app');
  }));
});



