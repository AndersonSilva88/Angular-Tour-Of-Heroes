import { HEROES } from './../mock-heroes';
import { Hero } from './../hero.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent  {

  heroes = HEROES;
  selectedHero?: Hero;


  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}
