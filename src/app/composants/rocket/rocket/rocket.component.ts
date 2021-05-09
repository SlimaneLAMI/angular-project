import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Rocket } from 'src/app/interfaces/rocket';
import { RocketService } from 'src/app/shared/rocket.service';

@Component({
  selector: 'app-rocket',
  templateUrl: './rocket.component.html',
  styleUrls: ['./rocket.component.css']
})
export class RocketComponent implements OnInit {

  rocket : Rocket = {};
  rockets: Array<Rocket> = new Array<Rocket>();

  constructor(private router: Router, private rocketService: RocketService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.router.navigated = false;
    this.router.navigate([this.router.url]).then(() => {
    this.rockets = this.route.snapshot.data.routeResolver;
    console.log(this.rockets);
    });
  }

  saveRocket() {
    this.rocketService.addRocket(this.rocket).subscribe(data => {
      console.log(data);
      this.reloadData();
    })
  }

  delRocket (id: any) {
    console.log("delRocket");
    this.rocketService.deleteRocket(id).subscribe(data => {
      console.log(data);
      this.reloadData();
    })
  }

  rocketEdit(id: any) {
    this.router.navigate(['edit-rocket', id]);
  }
  
}
