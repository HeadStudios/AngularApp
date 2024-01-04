import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbButtonsListPage } from './thumb-buttons-list.page';

describe('ThumbButtonsListPage', () => {
  let component: ThumbButtonsListPage;
  let fixture: ComponentFixture<ThumbButtonsListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThumbButtonsListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbButtonsListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
