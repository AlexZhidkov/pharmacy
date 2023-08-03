import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebbitHomeComponent } from './webbit-home.component';

describe('WebbitHomeComponent', () => {
  let component: WebbitHomeComponent;
  let fixture: ComponentFixture<WebbitHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WebbitHomeComponent]
    });
    fixture = TestBed.createComponent(WebbitHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
