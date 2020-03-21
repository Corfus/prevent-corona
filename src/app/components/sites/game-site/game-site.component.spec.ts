import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSiteComponent } from './game-site.component';

describe('GameSiteComponent', () => {
  let component: GameSiteComponent;
  let fixture: ComponentFixture<GameSiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameSiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
