import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFinishPage } from './order-finish.page';

describe('OrderFinishPage', () => {
  let component: OrderFinishPage;
  let fixture: ComponentFixture<OrderFinishPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderFinishPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderFinishPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
