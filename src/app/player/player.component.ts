import { Component, OnInit } from '@angular/core';
import { MatchesService } from '../matches.service'

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  matchesNumber: number;
  playerName = "Player name";

  named(){
    
  }

  subtract(n: number){
    this.matchesService.updateMatchesNumber(this.matchesNumber - n)
  }


  constructor(private matchesService: MatchesService) { }

  ngOnInit() {
    this.matchesService.matchesNumber.subscribe(matchesNumber => this.matchesNumber = matchesNumber);
  }

}
