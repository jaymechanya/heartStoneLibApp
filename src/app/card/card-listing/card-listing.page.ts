import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CardService} from '../shared/card.service';
import {Card} from '../shared/card.model';
import {LoadingController} from '@ionic/angular';
import {tsStructureIsReused} from '@angular/compiler-cli/src/transformers/util';

@Component({
  selector: 'app-card-listing',
  templateUrl: './card-listing.page.html',
  styleUrls: ['./card-listing.page.scss'],
})
export class CardListingPage {

  cardDeckGroup: string;
  cardDeck: string;
  cards: Card[] = [];
  loader: any;

  constructor(private route: ActivatedRoute,
              private cardService: CardService,
              private loadingCtrl: LoadingController) {}

  private async presentLoading() {
    const loader = await this.loadingCtrl.create({
      content: 'Loading..',
      translucent: true
    });
    loader.present();
    return loader;
  }

  async ionViewWillEnter() {
    this.cardDeckGroup = this.route.snapshot.paramMap.get('cardDeckGroup');
    this.cardDeck = this.route.snapshot.paramMap.get('cardDeck');

    this.loader = await this.presentLoading();

    this.cardService.getCardsByDeck(this.cardDeckGroup, this.cardDeck).subscribe(
    (cards: Card[]) => {
      this.cards = cards.map((card: Card) => {
            card.text = this.cardService.replaceCardTextLine(card.text);
            // card.text = card.text ? card.text.replace(new RegExp("\\\\n", "g"), ", ") : 'No Description';
            return card;
      });
      this.loader.dismiss();
    });
  }

}
