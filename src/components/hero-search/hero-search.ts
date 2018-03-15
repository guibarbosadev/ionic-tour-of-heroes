import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';
import { of }         from 'rxjs/observable/of';

import {
   debounceTime, distinctUntilChanged, switchMap
 } from 'rxjs/operators';

import { Hero } from '../../classes/hero';
import { HeroProvider } from '../../providers/hero/hero';
import { NavigationProvider } from '../../providers/navigation/navigation';

@Component({
  selector: 'app-hero-search',
  templateUrl: 'hero-search.html',
})
export class HeroSearchComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  private searchTerms = new Subject<string>();
  @Output() clickedInHero = new EventEmitter();

  constructor(private heroProvider: HeroProvider, public navigationProvider: NavigationProvider) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.heroProvider.searchHeroes(term)),
    );
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