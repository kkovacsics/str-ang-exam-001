import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Hero } from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private list: Hero[] = [
    {id: 1, name: 'Peter Griffin', superPower: 'retarded', address: 'Quahog'},
    {id: 2, name: 'Lois Griffin', superPower: 'housewife', address: 'Quahog'},
    {id: 3, name: 'Chris Griffin', superPower: 'foolish', address: 'Quahog'},
    {id: 4, name: 'Meg Griffin', superPower: 'unpopular', address: 'Quahog'},
    {id: 5, name: 'Stewie Griffin', superPower: 'sociopath', address: 'Quahog'}
  ];

  list$: BehaviorSubject<Hero[]> = new BehaviorSubject<Hero[]>([]);
  //list$: Hero[] = [];
  
  constructor() { }

  getAll(): void {
    this.list$.next(this.list);
  //  this.list$ = this.list;
  }
  
}
