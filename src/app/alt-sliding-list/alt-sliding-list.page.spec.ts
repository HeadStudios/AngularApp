import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltSlidingListPage } from './alt-sliding-list.page';

describe('AltSlidingListPage', () => {
  let component: AltSlidingListPage;
  let fixture: ComponentFixture<AltSlidingListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltSlidingListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltSlidingListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
