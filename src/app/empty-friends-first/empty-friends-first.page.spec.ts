import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyFriendsFirstPage } from './empty-friends-first.page';

describe('EmptyFriendsFirstPage', () => {
  let component: EmptyFriendsFirstPage;
  let fixture: ComponentFixture<EmptyFriendsFirstPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmptyFriendsFirstPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmptyFriendsFirstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
