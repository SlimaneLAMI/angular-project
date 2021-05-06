import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-adresse',
  templateUrl: './adresse.component.html',
  styleUrls: ['./adresse.component.css']
})
export class AdresseComponent implements OnInit {
  // Dans adresse.component.html, construisez un lien vers la    
  // route /adresse avec deux parametres    
  // Dans adresse.component.ts, utilisez la solution snapshot    
  // puis observable pour recuperer les parametres. Dans    
  // adresse.component.html, on affiche les parametres.    
  // Verifier, en cliquant sur le lien, que les nouveaux parametres sont affiches
  rue: any;
  codeP: any;

  nom = 'Wick';
  prenom = 'John';
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    // http://localhost:4200/adresse/rue%20Jean%20Jaures/75001
    this.rue = this.route.snapshot.params.rue;
    this.codeP = this.route.snapshot.params.codeP;
    console.log(this.rue + ", " + this.codeP);

    // http://localhost:4200/adresse?rue=rue%20Jean%20Jaures&codeP=75001
    this.route.queryParamMap.subscribe(res => {
      this.rue = res.get('rue');
      this.codeP = res.get('codeP');
      console.log(this.rue + " " + this.codeP);
    });

  }
  goToStagiaire(){
    // this.router.navigateByUrl("/stagiaire/" + this.nom + "/" + this.prenom)
    this.router.navigate(['/stagiaire', this.nom, this.prenom]);
  }

}
