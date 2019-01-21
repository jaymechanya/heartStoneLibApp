import {Component} from '@angular/core';
import {CardService} from '../shared/card.service';

import {CardDeck} from '../shared/card.model';

@Component({
    selector: 'app-card-deck',
    templateUrl: './card-deck.page.html',
    styleUrls: ['./card-deck.page.scss']
})
export class CardDeckPage {
    constructor(private cardService: CardService) {
        this.getCardDecks();
    }

    public cardDecks: CardDeck[] = [];

    private getCardDecks() {
        this.cardService.getAllCardDecks().subscribe(
            (cardDecks: CardDeck[]) => {
                this.cardDecks = cardDecks;
            }
        );
    }
}
