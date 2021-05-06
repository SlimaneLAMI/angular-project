import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Personne } from 'src/app/interfaces/personne';
import { PersonneService } from 'src/app/shared/personne.service';

@Component({
  selector: 'app-personne-details',
  templateUrl: './personne-details.component.html',
  styleUrls: ['./personne-details.component.css']
})
export class PersonneDetailsComponent implements OnInit {
  id!: any;
  personne!: any;
  constructor(private route: ActivatedRoute, private personneService: PersonneService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.personneService.getPerson(this.id).subscribe(data => {
      console.log(data);
      this.personne = data;
    })
  }

}
