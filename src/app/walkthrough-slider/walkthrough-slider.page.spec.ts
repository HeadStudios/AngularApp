import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WalkthroughSliderPage } from './walkthrough-slider.page';

describe('WalkthroughSliderPage', () => {
  let component: WalkthroughSliderPage;
  let fixture: ComponentFixture<WalkthroughSliderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WalkthroughSliderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WalkthroughSliderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
