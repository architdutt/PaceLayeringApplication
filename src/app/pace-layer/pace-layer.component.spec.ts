import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaceLayerComponent } from './pace-layer.component';

describe('PaceLayerComponent', () => {
  let component: PaceLayerComponent;
  let fixture: ComponentFixture<PaceLayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaceLayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaceLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
