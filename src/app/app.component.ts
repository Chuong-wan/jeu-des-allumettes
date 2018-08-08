import { Component } from '@angular/core';
import { MatchesService } from './matches.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jeu-des-allumettes';
  matchesNumber;
  gameStarted = false;
  startGame() {
    if(this.matchesNumber < 10 || this.matchesNumber > 40 || this.matchesNumber == null){
      alert("Entre 10 et 40")
    }
    else {
      this.gameStarted = true
      this.matchesService.updateMatchesNumber(+this.matchesNumber)
    }
  }

  constructor(private matchesService: MatchesService) { }

  ngOnInit() {
    this.matchesService.matchesNumber.subscribe(matchesNumber => this.matchesNumber = matchesNumber);
  }
}
