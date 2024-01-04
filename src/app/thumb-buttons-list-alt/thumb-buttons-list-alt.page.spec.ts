import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThumbButtonsListAltPage } from './thumb-buttons-list-alt.page';

describe('ThumbButtonsListAltPage', () => {
  let component: ThumbButtonsListAltPage;
  let fixture: ComponentFixture<ThumbButtonsListAltPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThumbButtonsListAltPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThumbButtonsListAltPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
