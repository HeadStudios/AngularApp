import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CondensedSlidingListPage } from './condensed-sliding-list.page';

describe('CondensedSlidingListPage', () => {
  let component: CondensedSlidingListPage;
  let fixture: ComponentFixture<CondensedSlidingListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondensedSlidingListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondensedSlidingListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
