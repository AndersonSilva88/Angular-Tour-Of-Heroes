import { HeroService } from './../hero.service';
import { Hero } from './../hero.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  selectedHero?: Hero;

  constructor(private HeroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.HeroService.getHeroes().subscribe((heroes) =>
      (this.heroes = heroes));
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
