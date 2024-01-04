import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CondensedListPage } from './condensed-list.page';

describe('CondensedListPage', () => {
  let component: CondensedListPage;
  let fixture: ComponentFixture<CondensedListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CondensedListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CondensedListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
