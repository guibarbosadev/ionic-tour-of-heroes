// Default imports
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// Page
import { HomePage } from '../pages/home/home';

import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../classes/in-memory-data';

// Providers
import { HeroProvider } from '../providers/hero/hero';
import { MessageProvider } from '../providers/message/message';
import { NavigationProvider } from '../providers/navigation/navigation';

// Components
import { DashboardComponent } from '../components/dashboard/dashboard';
import { HeroesComponent } from '../components/heroes/heroes';
import { HeroSearchComponent } from '../components/hero-search/hero-search';
import { HeroDetailComponent } from '../components/hero-detail/hero-detail';
import { MessagesComponent } from '../components/messages/messages';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    DashboardComponent,
    HeroesComponent,
    HeroSearchComponent,
    HeroDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HeroProvider,
    MessageProvider,
    NavigationProvider
  ]
})
export class AppModule {}
