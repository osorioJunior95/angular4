import { Component } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './const';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `
  <h1>{{title}}</h1>
  <h2>My Heroes</h2>
  <ul class="heroes">
    <li *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
      <span class="badge">{{hero.id}}</span>{{hero.name}}
    </li>
  </ul>
  <hero-detail [hero]="selectedHero"></hero-detail>`
})

export class AppComponent { 
  heroes = HEROES;
  selectedHero: Hero;

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }
}