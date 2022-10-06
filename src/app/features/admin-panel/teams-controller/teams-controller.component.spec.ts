import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsControllerComponent } from './teams-controller.component';

describe('TeamsControllerComponent', () => {
  let component: TeamsControllerComponent;
  let fixture: ComponentFixture<TeamsControllerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamsControllerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamsControllerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
