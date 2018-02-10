import { Component } from '@angular/core';
import { Card } from './card';
import { CARDS } from './mock-cards'
import { CardService } from './card.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CardService]
})
export class AppComponent {
  cards: Card[];

  constructor(private cardService: CardService) { }

  ngOnInit() {
    this.getCards();
  }

  getCards(): void {
    this.cards = this.cardService.getCards();
  }
}
