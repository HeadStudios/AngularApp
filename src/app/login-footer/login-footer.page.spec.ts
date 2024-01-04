import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFooterPage } from './login-footer.page';

describe('LoginPage', () => {
  let component: LoginFooterPage;
  let fixture: ComponentFixture<LoginFooterPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginFooterPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFooterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
