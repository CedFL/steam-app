import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FooterComponent } from './footer/footer.component';
import { BiblioComponent } from './biblio/biblio.component';
import { PageComponent } from './page/page.component';


export const ROUTES: Routes = [
  { path: '', component: AccueilComponent},
  { path: 'les-jeux', component: BiblioComponent },
  { path: 'les-jeux/:gameId', component: PageComponent }

];
