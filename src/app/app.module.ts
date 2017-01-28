import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';

import { GameService } from './game.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BiblioComponent } from './biblio/biblio.component';
<<<<<<< HEAD
import { AccueilComponent } from './accueil/accueil.component';
=======
import { PageComponent } from './page/page.component';
>>>>>>> origin/master

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BiblioComponent,
<<<<<<< HEAD
    AccueilComponent
=======
    PageComponent
>>>>>>> origin/master
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
