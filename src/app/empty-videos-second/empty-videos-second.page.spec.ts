import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyVideosSecondPage } from './empty-videos-second.page';

describe('EmptyVideosSecondPage', () => {
  let component: EmptyVideosSecondPage;
  let fixture: ComponentFixture<EmptyVideosSecondPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyVideosSecondPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyVideosSecondPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
