import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsetListPage } from './inset-list.page';

describe('InsetListPage', () => {
  let component: InsetListPage;
  let fixture: ComponentFixture<InsetListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsetListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsetListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
