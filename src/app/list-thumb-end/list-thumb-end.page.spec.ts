import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListThumbEndPage } from './list-thumb-end.page';

describe('ListThumbEndPage', () => {
  let component: ListThumbEndPage;
  let fixture: ComponentFixture<ListThumbEndPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListThumbEndPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListThumbEndPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
