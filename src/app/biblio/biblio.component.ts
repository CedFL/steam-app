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
  //Recuperation des donnees jeux
    this.games = this.dataService.getData();
  //Recuperation des donnees categories
    this.cats = this.dataService.getCat();
  }

// Traitement de la recherche
  searchGame(event) {
    event.preventDefault();
    if (this.search == "") return;
    let searchTerm = this.search;
    this.searchResult = [];
  //Verification: est-ce que la recherche correspond à un jeu
    this.games.forEach((jeu, i) => {
      console.log('Dans la boucle jeux');
      if (jeu.name.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0) {
        console.log("Oui c'est bon ! -- JEU ");
        let id = jeu.id;
        let idFinale: number = parseInt(id) - 1;
        this.searchResult.push(this.games[idFinale % this.games.length]);
        this.search = "";
        return false;
      }
    });

  // Verification: Est-ce que la recherche correspond à une categorie
    this.searchCatResult = [];
    this.cats.forEach((cat, i) => {
      console.log('Dans la boucle categorie');
      if (cat.name.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0) {
        console.log("Oui c'est bon ! -- CAT");
        let idCat = cat.id;

        this.games.forEach((jeu, i) => {
          console.log('Entrée boucle jeu par catégorie');
          let idRef = idCat;
          if (jeu.genres == idRef) {
            console.log("FINAL !");
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

//Recuperation: On recupere l'ID de la categorie par son nom, afin de l'utiliser avec l'array des jeux

  searchCat() {
    if (this.search == "") return;
    let searchTerm = this.search;
    this.searchCatResult = [];

    this.cats.forEach((cat, j) => {
      console.log('Entré boucle afficher jeu/cat');
      if (cat.name.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0) {
        let id = cat.id;
        let idFinal: number = parseInt(id) - 1;

        this.searchCatResult.push(this.cats[idFinal]);
        this.search = "";
      }
    });
  }

}
