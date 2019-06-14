import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MangerGamesComponent } from './manger-games.component';

describe('MangerGamesComponent', () => {
  let component: MangerGamesComponent;
  let fixture: ComponentFixture<MangerGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MangerGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MangerGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
