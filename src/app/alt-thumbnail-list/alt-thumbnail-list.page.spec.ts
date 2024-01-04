import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltThumbnailListPage } from './alt-thumbnail-list.page';

describe('AltThumbnailListPage', () => {
  let component: AltThumbnailListPage;
  let fixture: ComponentFixture<AltThumbnailListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltThumbnailListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltThumbnailListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
