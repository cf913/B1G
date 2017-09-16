import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
// COMPONENTS
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PlayerComponent } from './components/player/player.component';
import { MainComponent } from './components/main/main.component';
import { NewsfeedComponent } from './components/newsfeed/newsfeed.component';
import { NewsfeedListComponent } from './components/newsfeed/newsfeed-list/newsfeed-list.component';
import { NewsfeedItemComponent } from './components/newsfeed/newsfeed-item/newsfeed-item.component';
import { AboutComponent } from './components/about/about.component';
import { LeftSidebarComponent } from './components/left-sidebar/left-sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FriendsListComponent } from './components/player/friends-list/friends-list.component';
import { FriendsListItemComponent } from './components/player/friends-list-item/friends-list-item.component';
import { PlayerProfileComponent } from './components/player/player-profile/player-profile.component';
import { SettingsComponent } from './components/player/settings/settings.component';
import { ChatComponent } from './components/player/chat/chat.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { HomeTitleComponent } from './components/home/home-title/home-title.component';
// ROUTES
import { AppRoutingModule } from './app-routing.module';
// SERVICES
import { PlayerService } from './services/player.service';
import { PostService } from './services/post.service';
import { FirebaseService } from './services/firebase.service';
// GUARDS
import { AuthGuard } from './guards/authgard';
// FIREBASE
import { AngularFireModule } from 'angularfire2';
// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './services/auth.service';
import { VerifyComponent } from './components/verify/verify.component';


export const firebaseConfig = {
    apiKey: 'AIzaSyA3zEij56emhYzo6H4e-bp056plGmxZyYk',
    authDomain: 'synerg-b1g.firebaseapp.com',
    databaseURL: 'https://synerg-b1g.firebaseio.com',
    projectId: 'synerg-b1g',
    storageBucket: 'synerg-b1g.appspot.com',
    messagingSenderId: '53976675086'
};


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PlayerComponent,
    MainComponent,
    NewsfeedComponent,
    NewsfeedListComponent,
    NewsfeedItemComponent,
    AboutComponent,
    LeftSidebarComponent,
    HeaderComponent,
    FooterComponent,
    FriendsListComponent,
    FriendsListItemComponent,
    PlayerProfileComponent,
    SettingsComponent,
    ChatComponent,
    LoginComponent,
    RegisterComponent,
    HomeTitleComponent,
    VerifyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  ],
  providers: [
    PlayerService,
    PostService,
    AuthService,
    AuthGuard,
    FirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
