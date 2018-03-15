import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Hero } from '../../classes/hero';
import { HeroProvider }  from '../../providers/hero/hero';
import { NavigationProvider } from '../../providers/navigation/navigation';

@Component({
  selector: 'app-hero-detail',
  templateUrl: 'hero-detail.html'
})

export class HeroDetailComponent implements OnInit {

  constructor(
    private heroProvider: HeroProvider,
    public navigationProvider: NavigationProvider
  ) {
  }

  ngOnInit(): void {
  }

  goBack()
  {
    this.navigationProvider.changeView("HeroDetails", this.navigationProvider.previousView);
  }
  
 save(): void {
   this.heroProvider.updateHero(this.navigationProvider.selectedHero)
   .subscribe(()=> this.goBack());
  }
}


/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/