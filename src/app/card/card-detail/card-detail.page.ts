import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CardService} from '../shared/card.service';
import {Card} from '../shared/card.model';
import {LoaderService} from '../../shared/service/loader.service';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.page.html',
  styleUrls: ['./card-detail.page.scss'],
})
export class CardDetailPage {

  card: Card;

  constructor(
      private route: ActivatedRoute,
      private cardService: CardService,
      private loaderService: LoaderService
  ) {}

  ionViewWillEnter() {
    const cardId = this.route.snapshot.paramMap.get('cardId');

    // this.loader = await this.presentLoading();
    this.loaderService.presentLoading();

    this.cardService.getCardbyId(cardId).subscribe(
        (card: Card[]) => {
          this.card = card.map((card: Card) => {
            card.text = this.cardService.replaceCardTextLine(card.text);
            // card.text = card.text ? card.text.replace(new RegExp("\\\\n", "g"), ", ") : 'No Description';
            return card;
          })[0];

          // this.loader.dismiss();
          this.loaderService.dismissLoading();
        });
  }

  updateImage() {
    this.card.img = 'assets/image/DefaultCard.png';
  }
}
