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
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeTitleComponent } from './components/home/home-title/home-title.component';
import { AuthGuard } from './guards/authgard';
import { VerifyComponent } from './components/verify/verify.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  // HOME
  {path: 'home', component: HomeComponent,
    children: [
      // LOGIN - REGISTER
      {path: '', component: HomeTitleComponent, pathMatch: 'full'},
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: 'verify', component: VerifyComponent},
    ]
  },

  // MAIN PAGE
  {path: 'main', component: MainComponent, canActivate: [AuthGuard],
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
    ]
  },

  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
