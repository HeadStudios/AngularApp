import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiLineListPage } from './multi-line-list.page';

describe('MultiLineListPage', () => {
  let component: MultiLineListPage;
  let fixture: ComponentFixture<MultiLineListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiLineListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiLineListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
