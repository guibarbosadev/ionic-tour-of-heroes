import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Hero } from '../../classes/hero';
import { NavigationProvider } from '../../providers/navigation/navigation';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  selectedHero: Hero;

  constructor(public navCtrl: NavController, public navParams: NavParams, public navigationProvider: NavigationProvider) {
  }

  ionViewDidLoad() {
  }

  setPreviousView(previousView: string)
  {
    if(previousView == "Dashboard")
    {
      this.navigationProvider.previousView = "Heroes";
    }
    else if(previousView == "Heroes")
    {
      this.navigationProvider.previousView = "Dashboard";
    }
  }
}
