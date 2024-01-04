import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormAltPage } from './contact-form-alt.page';

describe('ContactFormPage', () => {
  let component: ContactFormAltPage;
  let fixture: ComponentFixture<ContactFormAltPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactFormAltPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormAltPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
