import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWorldPopupComponent } from './hello-world-popup.component';

describe('HelloWorldPopupComponent', () => {
  let component: HelloWorldPopupComponent;
  let fixture: ComponentFixture<HelloWorldPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloWorldPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloWorldPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
