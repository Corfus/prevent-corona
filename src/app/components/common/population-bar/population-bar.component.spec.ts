import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopulationBarComponent } from './population-bar.component';

describe('PopulationBarComponent', () => {
  let component: PopulationBarComponent;
  let fixture: ComponentFixture<PopulationBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopulationBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopulationBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
