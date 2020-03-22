import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchStateComponent } from './research-state.component';

describe('ResearchStateComponent', () => {
  let component: ResearchStateComponent;
  let fixture: ComponentFixture<ResearchStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResearchStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
