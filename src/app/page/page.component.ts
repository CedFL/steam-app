import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GameService} from "../game.service";
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  games: any;
  id: any;
  test: any;

  urlScreen1: any;
  urlScreen2: any;

  urlCover: any;
  idFinal: any;

  constructor(private dataService: GameService, private route: ActivatedRoute) { }

  ngOnInit() {
       
    this.id = this.route.snapshot.params['gameId'];
    this.games = this.dataService.getData();
    this.idFinal = this.id - 1;

 
    this.test = this.games[this.idFinal];

    this.urlScreen1 = this.test.screenshots[0].url;
    this.urlScreen2 = this.test.screenshots[1].url;
    this.urlCover = this.test.cover.url;
  }

}
