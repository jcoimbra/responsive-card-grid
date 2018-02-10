import { Injectable } from '@angular/core';
import { Card } from './card';
import { CARDS } from './mock-cards';

@Injectable()
export class CardService {

  constructor() { }

  getCards(): Card[] {
    return CARDS;
  }
}
