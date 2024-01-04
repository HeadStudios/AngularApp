import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupAltPage } from './signup-alt.page';

describe('SignupPage', () => {
  let component: SignupAltPage;
  let fixture: ComponentFixture<SignupAltPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupAltPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupAltPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
