import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyPhotosFifthPage } from './empty-photos-fifth.page';

describe('EmptyPhotosFifthPage', () => {
  let component: EmptyPhotosFifthPage;
  let fixture: ComponentFixture<EmptyPhotosFifthPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyPhotosFifthPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyPhotosFifthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
