import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {

  constructor() { }

  private matchesNumberSrc = new BehaviorSubject<number>(null);
  matchesNumber = this.matchesNumberSrc.asObservable();

  private matchesArraySrc = new BehaviorSubject<number[]>([]);
  matchesArray = this.matchesArraySrc.asObservable();

  updateMatchesNumber(n: number) {
      this.matchesNumberSrc.next(n);
      console.log("nom the matches number is : " + n)
      var matches = Array(n)
      for(let i=0; i < n; i++ ) {
      matches[i] = i
      }
      this.matchesArraySrc.next(matches)
  }

}
