import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamsLeaderboardComponent } from './teams-leaderboard.component';

describe('TeamsLeaderboardComponent', () => {
  let component: TeamsLeaderboardComponent;
  let fixture: ComponentFixture<TeamsLeaderboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamsLeaderboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamsLeaderboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
