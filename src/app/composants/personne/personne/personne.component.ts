import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personne } from 'src/app/interfaces/personne';
import { PersonneService } from 'src/app/shared/personne.service';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {

  personne: Personne = {};
  personnes: Array<Personne> = new Array<Personne>();

  constructor(private router: Router, private personneService: PersonneService) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData(){
    this.personneService.getAllPersons().subscribe(data => {
      this.personnes = data;
    });
  }

  savePerson(){
    this.personneService.addPerson(this.personne).subscribe(data => {
      console.log(data);
      this.reloadData();
    })
  }

  personEdit(id: any){
    this.router.navigate(['edit', id]);
  }

  
  delPerson(id: any) {
    this.personneService.deletePerson(id).subscribe(data => {
      console.log(data);
      this.reloadData();
    })
  }
  
  personDetails(id: any) {
    this.router.navigate(['details', id]);
  }
}
