import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerTopMenuComponent } from './manager-top-menu.component';

describe('ManagerTopMenuComponent', () => {
  let component: ManagerTopMenuComponent;
  let fixture: ComponentFixture<ManagerTopMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerTopMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerTopMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
