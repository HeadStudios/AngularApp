import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderedListPage } from './ordered-list.page';

describe('OrderedListPage', () => {
  let component: OrderedListPage;
  let fixture: ComponentFixture<OrderedListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderedListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderedListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
