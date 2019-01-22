import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { AboutPage } from '../about/about.page';
import { ContactPage } from '../contact/contact.page';
import {CardDeckPage} from '../card/card-deck/card-deck.page';
import {CardListingPage} from '../card/card-listing/card-listing.page';

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
        path: 'contact',
        outlet: 'contact',
        component: ContactPage
      },
      {
        path: 'card-deck',
        outlet: 'card',
        component: CardDeckPage
      },
      {
        path: 'card-listing',
        outlet: 'card',
        component: CardListingPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(card:card-deck)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
