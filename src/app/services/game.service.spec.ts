import { TestBed } from '@angular/core/testing';

import { gameService } from './game.service';

describe('GameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: gameService = TestBed.get(gameService);
    expect(service).toBeTruthy();
  });
});
