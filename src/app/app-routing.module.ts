import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdresseComponent } from './composants/adresse/adresse.component';
import { CalculetteComponent } from './composants/formulaires/calculette/calculette.component';
import { ErrorComponent } from './composants/error/error.component';
import { TemplateFormComponent } from './composants/formulaires/template-form/template-form.component';
import { HomeComponent } from './composants/home/home.component';
import { StagiaireComponent } from './composants/stagiaire/stagiaire.component';
import { ReactiveFormComponent } from './composants/formulaires/reactive-form/reactive-form.component';
import { CommentaireComponent } from './composants/formulaires/commentaire/commentaire.component';
import { PersonneComponent } from './composants/personne/personne/personne.component';
import { PersonneDetailsComponent } from './composants/personne/personne-details/personne-details.component';
import { PersonneEditComponent } from './composants/personne/personne-edit/personne-edit.component';
import { PersonResolver } from './resolvers/person.resolver';
import { PersonDetailsResolver } from './resolvers/person-details.resolver';
import { RocketComponent } from './composants/rocket/rocket/rocket.component';
import { RocketResolver } from './resolvers/rocket.resolver';
import { RocketEditComponent } from './composants/rocket/rocket-edit/rocket-edit.component';

const routes: Routes = [
  // localhost:4200/
  {path: 'home', component: HomeComponent},
  // localhost:4200/stagiaire
  {path: 'stagiaire', component: StagiaireComponent},
  // localhost:4200/stagiaire/John/Doe
  {path: 'stagiaire/:nom/:prenom', component: StagiaireComponent},
  // localhost:4200/adresse
  {path: 'adresse', component: AdresseComponent},
  // localhost:4200/adresse/rue/codePostal
  {path: 'adresse/:rue/:codeP', component: AdresseComponent},
  // localhost:4200/template-form
  {path: 'template-form', component: TemplateFormComponent},
  // localhost:4200/reactive-form
  {path: 'reactive-form', component: ReactiveFormComponent},
  // localhost:4200/calculette
  {path: 'calculette', component: CalculetteComponent},
  // localhost:4200/commentaire
  {path: 'commentaire', component: CommentaireComponent},
  // localhost:4200/personne
  {path: 'personne', runGuardsAndResolvers: 'always', component: PersonneComponent, resolve: { routeResolver: PersonResolver}},
  // localhost:4200/details/:id
  {path: 'details/:id', component: PersonneDetailsComponent, resolve: {personne: PersonDetailsResolver}},
  // localhost:4200/edit/:id
  { path: 'edit/:id', component: PersonneEditComponent },
  // localhost:4200/rocket
  { path: 'rocket', runGuardsAndResolvers: 'always', component: RocketComponent, resolve: { routeResolver: RocketResolver} },
  // localhost:4200/edit-rocket/:id
  { path: 'edit-rocket/:id', component: RocketEditComponent },
  // localhost:4200/error
  {path: 'error', component: ErrorComponent},
  // pathMatch = 'full' signifie que tout chemin d'url doit correspondre
  {path: '', redirectTo: '/home', pathMatch:'full'},
  // On affichera error.component en cas de chemin inexistant
  {path: '**', redirectTo: '/error'},
];

//  enableTracing: true permet de garder une trace de la recherche d’un chemin (pour le debogage).

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing:true})],
  exports: [RouterModule],
  providers: [PersonResolver, PersonDetailsResolver, RocketResolver]
})
export class AppRoutingModule { }
