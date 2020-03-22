import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwitterBoxComponent } from './twitter-box.component';

describe('TwitterBoxComponent', () => {
  let component: TwitterBoxComponent;
  let fixture: ComponentFixture<TwitterBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitterBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitterBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
