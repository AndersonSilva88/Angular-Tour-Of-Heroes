import { HeroService } from '../../../core/services/hero.service';
import { Hero } from '../../../core/moldels/hero.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name'];
  heroes: Hero[] = [];


  constructor(
    private HeroService: HeroService,

    ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.HeroService.getHeroes().subscribe((heroes) =>
      (this.heroes = heroes));
  }



}
