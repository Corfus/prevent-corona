import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionSpaceComponent } from './action-space.component';

describe('ActionSpaceComponent', () => {
  let component: ActionSpaceComponent;
  let fixture: ComponentFixture<ActionSpaceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionSpaceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
