import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoLinesListPage } from './no-lines-list.page';

describe('NoLinesListPage', () => {
  let component: NoLinesListPage;
  let fixture: ComponentFixture<NoLinesListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoLinesListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoLinesListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
