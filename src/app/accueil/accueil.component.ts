import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import {GameService} from "../game.service";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  games: any = "";
  urlImg: any = "";
  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.games = this.gameService.getData();
    this.urlImg = this.games

  }
}