import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { MowerUploaderComponent } from './mower-uploader/mower-uploader.component';
import { ValidatorService } from './core/services/validator.service';
import { ExecutorService } from './core/services/executor.service';
import { LoaderService } from './core/services/loader.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MowerUploaderComponent,
      ],
      providers: [
        MowerUploaderComponent,
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



