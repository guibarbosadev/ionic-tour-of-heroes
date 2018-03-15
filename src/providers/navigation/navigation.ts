import { Injectable } from '@angular/core';
import { Hero } from '../../classes/hero';
/*
  Generated class for the NavigationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NavigationProvider {

  currentView: string = "Dashboard";
  previousView: string;
  selectedHero: Hero;

  changeView(currentView: string, nextView: string)
  {
    this.currentView = nextView;
    this.previousView = currentView;
  }
  
  changeSelectedHero(hero: Hero)
  {
    this.selectedHero = hero;
  }

  // setCurrentView(view: string)
  // {
  //   this.currentView = view;
  // }

  // setPreviousView(view: string)
  // {
  //   this.previousView = view;
  // }

  // setSelectedHero(hero: Hero)
  // {
  //   this.selectedHero = hero;
  // }

  // getCurrentView(): string
  // {
  //   return this.currentView; 
  // }

  // getPreviousView(): string
  // {
  //   return this.previousView; 
  // }


  // getSelectedHero(): Hero
  // {
  //   return this.selectedHero;
  // }
}
