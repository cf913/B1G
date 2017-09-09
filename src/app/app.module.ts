import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PlayerComponent } from './components/player/player.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'player/:id', component: PlayerComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
