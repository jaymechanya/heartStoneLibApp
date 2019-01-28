import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { AboutPage } from '../about/about.page';
import { ContactPage } from '../contact/contact.page';
import {CardDeckPage} from '../card/card-deck/card-deck.page';
import {CardListingPage} from '../card/card-listing/card-listing.page';
import {CardDetailPage} from '../card/card-detail/card-detail.page';
import {CardFavoritePage} from '../card/card-favorite/card-favorite.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'about',
        outlet: 'about',
        component: AboutPage
      },
      {
        path: 'favorite',
        outlet: 'favorite',
        component: CardFavoritePage
      },
      {
        path: 'card',
        outlet: 'card',
        component: CardDeckPage
      },
      {
        path: 'card/:cardDeckGroup/:cardDeck',
        outlet: 'card',
        component: CardListingPage
      },
      {
        path: 'card/:cardId',
        outlet: 'card',
        component: CardDetailPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(card:card)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
