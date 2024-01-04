import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListThumbStartPage } from './list-thumb-start.page';

describe('ListThumbStartPage', () => {
  let component: ListThumbStartPage;
  let fixture: ComponentFixture<ListThumbStartPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListThumbStartPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListThumbStartPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
