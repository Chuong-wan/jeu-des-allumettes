import { Component, OnInit, Input } from '@angular/core';
import { MatchesService } from '../matches.service'

@Component({
  selector: 'app-matches-list',
  templateUrl: './matches-list.component.html',
  styleUrls: ['./matches-list.component.css']
})
export class MatchesListComponent implements OnInit {

  matchesNumber: number;

  matches: number[] = [];
  constructor(private matchesService: MatchesService) { }

  ngOnInit() {
    this.matchesService.matchesNumber.subscribe(matchesNumber => this.matchesNumber = matchesNumber);
    this.matchesService.matchesArray.subscribe(matches => this.matches = matches);
    console.log(this.matchesNumber)
    
  }

}
