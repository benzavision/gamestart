import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerCustomerListComponent } from './manager-customer-list.component';

describe('ManagerCustomerListComponent', () => {
  let component: ManagerCustomerListComponent;
  let fixture: ComponentFixture<ManagerCustomerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerCustomerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerCustomerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
