import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BiblioComponent } from './biblio/biblio.component';
import { PageComponent } from './page/page.component';


export const ROUTES: Routes = [
  { path: '', component: BiblioComponent},
  { path: 'les-jeux', component: PageComponent },

];
