import { TestBed } from '@angular/core/testing';

import { GetTeamsService } from './get-teams.service';

describe('GetTeamsService', () => {
  let service: GetTeamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetTeamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
