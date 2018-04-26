import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MowerPositionComponent } from './mower-position.component';

describe('MowerPositionComponent', () => {
  let component: MowerPositionComponent;
  let fixture: ComponentFixture<MowerPositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MowerPositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MowerPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
