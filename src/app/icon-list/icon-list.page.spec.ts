import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconListPage } from './icon-list.page';

describe('IconListPage', () => {
  let component: IconListPage;
  let fixture: ComponentFixture<IconListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
