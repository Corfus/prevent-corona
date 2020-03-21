import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusValueComponent } from './status-value.component';

describe('StatusValueComponent', () => {
  let component: StatusValueComponent;
  let fixture: ComponentFixture<StatusValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
