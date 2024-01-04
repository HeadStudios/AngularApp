import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlidingListPage } from './sliding-list.page';

describe('SlidingListPage', () => {
  let component: SlidingListPage;
  let fixture: ComponentFixture<SlidingListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidingListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlidingListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
