import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-commentaire',
  templateUrl: './commentaire.component.html',
  styleUrls: ['./commentaire.component.css']
})
export class CommentaireComponent implements OnInit {
  
  personnes: any = [];

  constructor(private fb: FormBuilder) { }

  personneForm = this.fb.group({
    nom: ['', [Validators.required, this.checkValidator]],
    prenom: ['', [Validators.required, this.checkValidator]],
    commentaires: this.fb.array([ ])
  });

  checkValidator(control: FormControl) {
    let str: string = control.value;
    let regex = /^[A-Z].*$/;
    if (regex.test(str)) {
      return null;
    } else {
      return { erreur: 'non valide' };
    }
  }

  get commentaires() {
    return this.personneForm.get('commentaires') as FormArray;
  }

  ngOnInit(): void {
  }

  ajouterCommentaire() {
    this.commentaires.push(this.fb.group({
      titre: [''],
      contenu: [''],
      categorie: ['']
    }));
  }

  supprimerCommentaire(i: number) {
    this.commentaires.removeAt(i);
  }

  afficherTout() {
    this.personnes.push({ ...this.personneForm.value }); 
    this.personneForm.reset();
    this.commentaires.clear(); 
  }
}
