import { AboutComponent } from './components/about/about.component';
import { NewsfeedListComponent } from './components/newsfeed/newsfeed-list/newsfeed-list.component';
import { FriendsListComponent } from './components/player/friends-list/friends-list.component';
import { PlayerProfileComponent } from './components/player/player-profile/player-profile.component';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SettingsComponent } from './components/player/settings/settings.component';
import { ChatComponent } from './components/player/chat/chat.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},

  // LOGIN - REGISTER
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},

  // MAIN PAGE
  {path: 'main', component: MainComponent,
    children: [
      {path: '', outlet: 'player', component: PlayerProfileComponent, pathMatch: 'full'},
      {path: '', outlet: 'news', component: NewsfeedListComponent, pathMatch: 'full'},
      // PLAYER
      {path: 'profile', outlet: 'player', component: PlayerProfileComponent},
      {path: 'friends', outlet: 'player', component: FriendsListComponent},
      {path: 'chat', outlet: 'player', component: ChatComponent},
      {path: 'settings', outlet: 'player', component: SettingsComponent},
      // NEWS
      {path: 'newsfeed', outlet: 'news', component: NewsfeedListComponent}
    ]},

  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
