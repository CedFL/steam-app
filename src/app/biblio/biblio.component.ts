import { Component, OnInit } from '@angular/core';
import {GameService} from '../game.service';

@Component({
  moduleId: 'moduleId',
  selector: 'app-biblio',
  templateUrl: './biblio.component.html',
  styleUrls: ['./biblio.component.css']
})

export class BiblioComponent implements OnInit {
 games;

constructor(private gameService: GameService) {}

ngOnInit() {
  this.games = this.gameService.getGames();
}
}
