import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyFriendsSecondPage } from './empty-friends-second.page';

describe('EmptyFriendsSecondPage', () => {
  let component: EmptyFriendsSecondPage;
  let fixture: ComponentFixture<EmptyFriendsSecondPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyFriendsSecondPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyFriendsSecondPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
