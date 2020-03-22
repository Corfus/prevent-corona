import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndSiteValueComponent } from './end-site-value.component';

describe('EndSiteValueComponent', () => {
  let component: EndSiteValueComponent;
  let fixture: ComponentFixture<EndSiteValueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndSiteValueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndSiteValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
