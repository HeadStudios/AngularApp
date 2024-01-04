import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommerceHomePage } from './commerce-home.page';

describe('CommerceHomePage', () => {
  let component: CommerceHomePage;
  let fixture: ComponentFixture<CommerceHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommerceHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommerceHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
