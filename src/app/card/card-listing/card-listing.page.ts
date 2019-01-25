import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CardService} from '../shared/card.service';
import {Card} from '../shared/card.model';
import {LoaderService} from '../../shared/service/loader.service';
import {ToastService} from '../../shared/service/toast.service';

@Component({
  selector: 'app-card-listing',
  templateUrl: './card-listing.page.html',
  styleUrls: ['./card-listing.page.scss'],
})
export class CardListingPage {

  cardDeckGroup: string;
  cardDeck: string;
  cards: Card[] = [];

  constructor(
      private route: ActivatedRoute,
      private cardService: CardService,
      private loaderService: LoaderService,
      private toaster: ToastService
  ) {}

  ionViewWillEnter() {
    this.cardDeckGroup = this.route.snapshot.paramMap.get('cardDeckGroup');
    this.cardDeck = this.route.snapshot.paramMap.get('cardDeck');

    // this.loader = await this.presentLoading();
    this.loaderService.presentLoading();

    this.cardService.getCardsByDeck(this.cardDeckGroup, this.cardDeck).subscribe(
    (cards: Card[]) => {
      this.cards = cards.map((card: Card) => {
            card.text = this.cardService.replaceCardTextLine(card.text);
            // card.text = card.text ? card.text.replace(new RegExp("\\\\n", "g"), ", ") : 'No Description';
            return card;
      });
      // this.loader.dismiss();
      this.loaderService.dismissLoading();
    }, () => {
        this.loaderService.dismissLoading();
        this.toaster.presentErrorToast('Sorry, cards could not be loaded. Please try to refresh a page.');
      });
  }

}
