import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicListPage } from './basic-list.page';

describe('BasicListPage', () => {
  let component: BasicListPage;
  let fixture: ComponentFixture<BasicListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
