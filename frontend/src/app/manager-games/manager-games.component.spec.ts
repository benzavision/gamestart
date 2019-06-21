import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerGamesComponent } from './manager-games.component';

describe('ManagerGamesComponent', () => {
  let component: ManagerGamesComponent;
  let fixture: ComponentFixture<ManagerGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
