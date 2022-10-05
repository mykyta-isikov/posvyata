import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassCodeAuthComponent } from './pass-code-auth.component';

describe('PassCodeAuthComponent', () => {
  let component: PassCodeAuthComponent;
  let fixture: ComponentFixture<PassCodeAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassCodeAuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassCodeAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
