import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard';
import { HeroesComponent } from './heroes/heroes';
import { HeroSearchComponent } from './hero-search/hero-search';
import { HeroDetailComponent } from './hero-detail/hero-detail';
import { MessagesComponent } from './messages/messages';
@NgModule({
	declarations: [DashboardComponent,
    HeroesComponent,
    HeroSearchComponent,
    HeroDetailComponent,
    MessagesComponent],
	imports: [],
	exports: [DashboardComponent,
    HeroesComponent,
    HeroSearchComponent,
    HeroDetailComponent,
    MessagesComponent]
})
export class ComponentsModule {}
