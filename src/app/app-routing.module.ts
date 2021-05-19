import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
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
import { TableComponent } from './composants/materials/table/table.component';
import { TreeComponent } from './composants/materials/tree/tree.component';
import { AddressFormComponent } from './composants/materials/address-form/address-form.component';
import { AuthComponent } from './composants/auth/auth.component';
import { AuthGuard } from './guards/auth.guard';
import { RegisterComponent } from './composants/register/register.component';
import { ProfileComponent } from './composants/profile/profile.component';
import { LeaveGuard } from './guards/leave.guard';
import { FeaturesComponent } from './composants/interactions/features/features.component';
import { DeveloperComponent } from './composants/interactions/exercices/developer/developer.component';

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
  {path: 'template-form', component: TemplateFormComponent, canDeactivate:[LeaveGuard]},
  // localhost:4200/reactive-form
  {path: 'reactive-form', component: ReactiveFormComponent},
  // localhost:4200/calculette
  {path: 'calculette', component: CalculetteComponent},
  // localhost:4200/commentaire
  {path: 'commentaire', component: CommentaireComponent},
  // localhost:4200/personne
  { path: 'personne', runGuardsAndResolvers: 'always', component: PersonneComponent, resolve: { routeResolver: PersonResolver }, canActivate: [AuthGuard]},  
  // localhost:4200/details/:id
  { path: 'details/:id', component: PersonneDetailsComponent, resolve: {personne: PersonDetailsResolver}},
  // localhost:4200/edit/:id
  { path: 'edit/:id', component: PersonneEditComponent },
  // localhost:4200/rocket
  { path: 'rocket', runGuardsAndResolvers: 'always', component: RocketComponent, resolve: { routeResolver: RocketResolver} },
  // localhost:4200/edit-rocket/:id
  { path: 'edit-rocket/:id', component: RocketEditComponent },
  // localhost:4200/table
  { path: 'table', component: TableComponent },
  // localhost:4200/tree
  { path: 'tree', component: TreeComponent },
  // localhost:4200/address-form
  { path: 'address-form', component: AddressFormComponent },
  // localhost:4200/auth
  { path: 'auth', component: AuthComponent },
  // localhost:4200/register
  { path: 'register', component: RegisterComponent },
  // localhost:4200/profile
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  // Chargement des routes du sous-module vehicule en mode eager loading
  // on charge le sous-module vehicule au demarrage de l'app
  // { path: 'vehicule', children: [
  //   { path:'camion', component: CamionComponent},
  //   { path:'voiture', component: VoitureComponent},
  //   { path:'', redirectTo: 'camion', pathMatch: 'full'}
  //   ] 
  // },

    // Chargement des routes du sous-module vehicule en mode lazy loading
  // on charge le sous-module vehicule seulement à l'appel des routes/chemins 
 
  // L’avantage de ce mécanisme se situe évidemment au niveau des performances, puisque 
  // l’on va pouvoir proposer un affichage de l’application beaucoup plus rapidement 
  // en ne chargeant que la partie nécessaire, et en déférrant le chargement des autres parties.
  { path: 'vehicule', loadChildren: () => import('./modules/vehicule/vehicule.module')
    .then(m => m.VehiculeModule) 
  },
  // localhost:4200/features
  {path: 'features', component: FeaturesComponent},
  // localhost:4200/developer
  { path: 'developer', component: DeveloperComponent },
  // localhost:4200/error
  {path: 'error', component: ErrorComponent},
  // pathMatch = 'full' signifie que tout chemin d'url doit correspondre
  {path: '', redirectTo: '/home', pathMatch:'full'},
  // On affichera error.component en cas de chemin inexistant
  {path: '**', redirectTo: '/error'},
];

//  enableTracing: true permet de garder une trace de la recherche d’un chemin (pour le debogage).

@NgModule({
  // PreloadAllModules permet de charger tous les modules sans attendre qu’ils soient visités.
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
