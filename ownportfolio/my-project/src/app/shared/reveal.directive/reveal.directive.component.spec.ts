import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RevealDirectiveComponent } from './reveal.directive.component';

describe('RevealDirectiveComponent', () => {
  let component: RevealDirectiveComponent;
  let fixture: ComponentFixture<RevealDirectiveComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RevealDirectiveComponent]
    });
    fixture = TestBed.createComponent(RevealDirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
