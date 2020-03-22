import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndSiteComponent } from './end-site.component';

describe('EndSiteComponent', () => {
  let component: EndSiteComponent;
  let fixture: ComponentFixture<EndSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
