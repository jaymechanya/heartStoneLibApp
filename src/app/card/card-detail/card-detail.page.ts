import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CardService} from '../shared/card.service';
import {Card} from '../shared/card.model';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.page.html',
  styleUrls: ['./card-detail.page.scss'],
})
export class CardDetailPage {

  card: Card;

  constructor(private route: ActivatedRoute,
              private cardService: CardService) {}

  ionViewWillEnter() {
    const cardId = this.route.snapshot.paramMap.get('cardId');

    this.cardService.getCardbyId(cardId).subscribe(
        (card: Card[]) => {
          this.card = card.map((card: Card) => {
            // card.text = card.text ? card.text.replace(new RegExp("\\\\n", "g"), ", ") : 'No Description';
            card.text = this.cardService.replaceCardTextLine(card.text);
            return card;
          })[0];
        });
  }

  updateImage() {
    this.card.img = 'assets/image/DefaultCard.png';
  }
}
