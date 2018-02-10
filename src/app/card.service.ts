import { Injectable } from '@angular/core';
import { Card } from './card';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CardService {

  private cardsUrl = 'api/cards';

  constructor(
    private http: HttpClient
  ) { }

  getCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.cardsUrl);
  }
}
