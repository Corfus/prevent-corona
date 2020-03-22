import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsibilitesComponent } from './responsibilites.component';

describe('ResponsibilitesComponent', () => {
  let component: ResponsibilitesComponent;
  let fixture: ComponentFixture<ResponsibilitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResponsibilitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsibilitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
