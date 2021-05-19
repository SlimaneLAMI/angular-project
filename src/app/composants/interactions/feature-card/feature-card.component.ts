import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feature-card',
  templateUrl: './feature-card.component.html',
  styleUrls: ['./feature-card.component.css']
})
export class FeatureCardComponent implements OnInit {

  // @Input : permet à un composant fils de récuperer des données
  // de son composant parent (=> home-features)
  // Elles devront etre injectées par le composant parent

  @Input() description !: string;
  @Input() icon !: string;
  @Input() title !: string;

  constructor() { }

  ngOnInit(): void {
  }

}
