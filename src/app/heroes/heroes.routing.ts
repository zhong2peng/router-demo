import { NgModule } from '@angular/core';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { Routes, RouterModule } from '@angular/router';

const heroesRoutes: Routes = [
  { path: 'heroes', redirectTo: 'superheroes' },
  { path: 'hero/:id', redirectTo: 'superhero/:id' },
  { path: 'superheroes', component: HeroListComponent },
  { path: 'superhero/:id', component: HeroDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule { }