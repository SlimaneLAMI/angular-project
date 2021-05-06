import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculette',
  templateUrl: './calculette.component.html',
  styleUrls: ['./calculette.component.css']
})
export class CalculetteComponent implements OnInit {

  nbr1!: number;
  nbr2!: number;
  resultat!: number;
  constructor() { }

  ngOnInit(): void {
  }

  addition(){
    this.resultat = this.nbr1 + this.nbr2;
  }
  soustraction(){
    this.resultat = this.nbr1 - this.nbr2;
  }
  multiplication(){
    this.resultat = this.nbr1 * this.nbr2;
  }
  division(){
    this.resultat = this.nbr1 / this.nbr2;
  }

}
