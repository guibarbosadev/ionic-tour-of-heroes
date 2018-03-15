import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Hero } from '../../classes/hero';
import { HeroProvider } from '../../providers/hero/hero';
import { NavigationProvider } from '../../providers/navigation/navigation';
 
@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  @Output() clickedInHero = new EventEmitter();
  constructor(private heroProvider: HeroProvider, public navigationProvider: NavigationProvider) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroProvider.getHeroes()
      .subscribe(heroes => {
        this.heroes = heroes.slice(1, 5);
      });
  }

  selectedHero(hero: Hero)
  {
    this.navigationProvider.changeSelectedHero(hero);
    this.navigationProvider.changeView("Dashboard", "HeroDetails");
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/