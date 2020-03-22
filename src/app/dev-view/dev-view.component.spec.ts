import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {DevViewComponent} from './dev-view.component';

describe('DevViewComponent', () => {
  let component: DevViewComponent;
  let fixture: ComponentFixture<DevViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DevViewComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
