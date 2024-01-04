import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectorsPage } from './selectors.page';

describe('SelectorsPage', () => {
  let component: SelectorsPage;
  let fixture: ComponentFixture<SelectorsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectorsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
