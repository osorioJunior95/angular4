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
    <li *ngFor="let hero of heroes">
      <span class="badge">{{hero.id}}</span>{{hero.name}}
    </li>
  </ul>
	<h2>{{hero.name}} details!</h2>
	<div><label>id: </label>{{hero.id}}</div>
	<div>
		<label>name: </label>
		<input [(ngModel)]="hero.name" placeholder="name">
	</div>`
})

export class AppComponent { 
  hero = HEROES;

  constructor() {
    console.log(this.hero)            
  }
}