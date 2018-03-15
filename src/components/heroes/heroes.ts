import { Component, OnInit } from '@angular/core';

import { Hero } from '../../classes/hero';
import { HeroProvider } from '../../providers/hero/hero';
import { NavigationProvider } from '../../providers/navigation/navigation';

@Component({
  selector: 'app-heroes',
  templateUrl: 'heroes.html'
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroProvider: HeroProvider, public navigationProvider: NavigationProvider) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroProvider.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroProvider.addHero({ name } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  selectedHero(hero: Hero): void
  {
    this.navigationProvider.changeSelectedHero(hero);
    this.navigationProvider.changeView("Heroes", "HeroDetails");
  }

  
  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroProvider.deleteHero(hero);
  }

}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/