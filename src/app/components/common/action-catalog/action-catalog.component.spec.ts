import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionCatalogComponent } from './action-catalog.component';

describe('ActionCatalogComponent', () => {
  let component: ActionCatalogComponent;
  let fixture: ComponentFixture<ActionCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
