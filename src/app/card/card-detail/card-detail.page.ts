import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CardService} from '../shared/card.service';
import {Card} from '../shared/card.model';
import {LoaderService} from '../../shared/service/loader.service';
import {AlertService} from '../../shared/service/alert.service';

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
      private loaderService: LoaderService,
      private alertService: AlertService
  ) {}

  ionViewWillEnter() {
    const cardId = this.route.snapshot.paramMap.get('cardId');

    this.loaderService.presentLoading();

    this.cardService.getCardbyId(cardId).subscribe(
        (card: Card[]) => {
          this.card = card.map((card: Card) => {
            card.text = this.cardService.replaceCardTextLine(card.text);
            return card;
          })[0];

          // this.alertService.presentAlert('Connection error, please reload the page.');
          this.loaderService.dismissLoading();
        });
  }

  updateImage() {
    this.card.img = 'assets/image/DefaultCard_small.jpg';
  }
}
