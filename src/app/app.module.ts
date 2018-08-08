import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PlayerComponent } from './player/player.component';
import { MatchesListComponent } from './matches-list/matches-list.component';
import { MatchesService } from './matches.service'

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    MatchesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MatchesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
