import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadersListPage } from './headers-list.page';

describe('HeadersListPage', () => {
  let component: HeadersListPage;
  let fixture: ComponentFixture<HeadersListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadersListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadersListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
