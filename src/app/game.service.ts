import { Injectable } from '@angular/core';

import { Game } from './game';
import { GAMES } from './mock-games';

@Injectable()
export class GameService {
  getGames(): Game[] {
    return GAMES;
  }
}