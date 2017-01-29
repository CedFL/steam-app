import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {GameService} from "../game.service";


@Component({
  selector: 'app-biblio',
  templateUrl: './biblio.component.html',
  styleUrls: ['./biblio.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class BiblioComponent implements OnInit {
  page: number = 1;
  games: any = "";
  cats: any = "";
  gameFav: any = "";
  search: any = "";
  searchResult: any = "";
  searchCatResult: any = "";


  constructor(private dataService: GameService) {
  }

  ngOnInit() {

    this.games = this.dataService.getData();

    this.cats = this.dataService.getCat();
  }


  searchGame(event) {
    event.preventDefault();
    if (this.search == "") return;
    let searchTerm = this.search;
    this.searchResult = [];
 
    this.games.forEach((jeu, i) => {

      if (jeu.name.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0) {
   
        let id = jeu.id;
        let idFinale: number = parseInt(id) - 1;
        this.searchResult.push(this.games[idFinale % this.games.length]);
        this.search = "";
        return false;
      }
    });


    this.searchCatResult = [];
    this.cats.forEach((cat, i) => {
   
      if (cat.name.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0) {
     
        let idCat = cat.id;

        this.games.forEach((jeu, i) => {
      
          let idRef = idCat;
          if (jeu.genres == idRef) {
     
            let id = jeu.id;
            let idIndex = id - 1;

            this.searchCatResult.push(this.games[idIndex]);
            this.search = "";
          }
        });
        return false;
      }
    });

  }


  searchCat() {
    if (this.search == "") return;
    let searchTerm = this.search;
    this.searchCatResult = [];

    this.cats.forEach((cat, j) => {
   
      if (cat.name.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0) {
        let id = cat.id;
        let idFinal: number = parseInt(id) - 1;

        this.searchCatResult.push(this.cats[idFinal]);
        this.search = "";
      }
    });
  }

}