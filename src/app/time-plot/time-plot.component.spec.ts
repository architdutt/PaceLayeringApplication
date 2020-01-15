import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimePlotComponent } from './time-plot.component';

describe('TimePlotComponent', () => {
  let component: TimePlotComponent;
  let fixture: ComponentFixture<TimePlotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimePlotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimePlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
