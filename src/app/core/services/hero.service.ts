import { environment } from './../../../environments/environment';
import { MessageService } from './message.service';
import { Hero } from '../moldels/hero.model';
import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Observable, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = `${environment.baseUrl}/heroes`;

  constructor(
    private http: HttpClient,
    private MessageService: MessageService
  ) {}

  //GET /heroes
  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
    .pipe(tap((heroes) => this.log(`fetched ${heroes.length} hero(es)`)));
  }

  //GET /heroes/id
  getHero(id: number): Observable<Hero>{
    return this.http.get<Hero>(`${this.heroesUrl}/${id}`)
    .pipe(tap((hero) => this.log(`fetched hero id=${id} and name=${hero.name}`))
      );
 }

 private log(message: string): void {
  this.MessageService.add(`HeroService: ${message}`);
 }
}
