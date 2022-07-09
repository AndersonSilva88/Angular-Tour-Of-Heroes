import { Hero } from '../core/moldels/hero.model';
import { HeroService } from '../core/services/hero.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent  implements OnInit{
  hero!: Hero;

constructor(
  private heroService: HeroService,
  private location: Location,
  private route: ActivatedRoute) {}

ngOnInit(): void {
  this.getHero();
}

getHero(): void {
  const id = Number(this.route.snapshot.paramMap.get('id'));

  this.heroService.getHero(id).subscribe((hero) => (this.hero = hero));
}

goBack(): void {
  this.location.back();
}

}
