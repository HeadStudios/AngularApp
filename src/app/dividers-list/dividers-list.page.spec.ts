import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DividersListPage } from './dividers-list.page';

describe('DividersListPage', () => {
  let component: DividersListPage;
  let fixture: ComponentFixture<DividersListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DividersListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DividersListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
