import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAltPage } from './home-alt.page';

describe('HomeAltPage', () => {
  let component: HomeAltPage;
  let fixture: ComponentFixture<HomeAltPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAltPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAltPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
