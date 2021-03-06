import { Hero } from '../core/moldels/hero.model';
import { HeroService } from '../core/services/hero.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    this.gteHeroes();
  }

  gteHeroes(): void{
      this.heroService.getHeroes().subscribe(heroes =>
        this.heroes = heroes.slice(1, 5));
  }
}
