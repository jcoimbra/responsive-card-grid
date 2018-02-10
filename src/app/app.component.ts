import { Component } from '@angular/core';
import { Card } from './card';
import { CardService } from './card.service';
import { Observable } from 'rxjs/Observable';

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
    this.cardService.getCards()
      .subscribe(cards => this.cards = cards);
  }
}
