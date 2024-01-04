import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternativeProfilePage } from './alternative-profile.page';

describe('AlternativeProfilePage', () => {
  let component: AlternativeProfilePage;
  let fixture: ComponentFixture<AlternativeProfilePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlternativeProfilePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlternativeProfilePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
