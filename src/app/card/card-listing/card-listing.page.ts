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

  private getCards() {
    this.loaderService.presentLoading();

    this.cardService.getCardsByDeck(this.cardDeckGroup, this.cardDeck).subscribe(
        (cards: Card[]) => {
            this.cards = cards.map((card: Card) => {
                card.text = this.cardService.replaceCardTextLine(card.text);
                return card;
            });
            this.loaderService.dismissLoading();
        }, () => {
            this.loaderService.dismissLoading();
            this.toaster.presentErrorToast('Sorry, cards could not be loaded. Please try to refresh a page.');
        }
    );
  }

  ionViewWillEnter() {
    this.cardDeckGroup = this.route.snapshot.paramMap.get('cardDeckGroup');
    this.cardDeck = this.route.snapshot.paramMap.get('cardDeck');

    if (this.cards && this.cards.length === 0) this.getCards();
  }

    doRefresh(event) {
        this.getCards();
        event.target.complete();
    }
}
