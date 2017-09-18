import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { NewsfeedListComponent } from './components/newsfeed/newsfeed-list/newsfeed-list.component';
import { FriendsListComponent } from './components/user/friends-list/friends-list.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { MainComponent } from './components/main/main.component';
import { HomeComponent } from './components/home/home.component';
import { SettingsComponent } from './components/user/settings/settings.component';
import { ChatComponent } from './components/user/chat/chat.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeTitleComponent } from './components/home/home-title/home-title.component';
// import { AuthGuard } from './guards/authgard';
import { VerifyComponent } from './components/verify/verify.component';
import { NewsfeedDetailComponent } from './components/newsfeed/newsfeed-detail/newsfeed-detail.component';
import { TeamsComponent } from './components/teams/teams.component';
import { TeamsDetailComponent } from './components/teams/teams-detail/teams-detail.component';
import { PlayersComponent } from './components/players/players.component';
import { PlayersDetailComponent } from './components/players/players-detail/players-detail.component';

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
  {path: 'main', component: MainComponent,
    children: [
      {path: '', outlet: 'user', component: UserProfileComponent},
      {path: '', outlet: 'middle', component: NewsfeedListComponent},
      // USER
      {path: 'profile', outlet: 'user', component: UserProfileComponent},
      {path: 'friends', outlet: 'user', component: FriendsListComponent},
      {path: 'chat', outlet: 'user', component: ChatComponent},
      {path: 'settings', outlet: 'user', component: SettingsComponent},
      // NEWS
      {path: 'newsfeed', outlet: 'middle', component: NewsfeedListComponent},
      {path: 'newsfeed/:id', outlet: 'middle', component: NewsfeedDetailComponent},
      // TEAMS
      {path: 'teams', outlet: 'middle', component: TeamsComponent},
      {path: 'teams/:id', outlet: 'middle', component: TeamsDetailComponent},
      // PLAYERS
      {path: 'players', outlet: 'middle', component: PlayersComponent},
      {path: 'players/:id', outlet: 'middle', component: PlayersDetailComponent},
    ]
  },

  {path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
