import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {CardService} from './shared/card.service';

import {CardDeckPage} from './card-deck/card-deck.page';
import {CardListComponent} from './components/card-list.component';
import {CardListingPage} from './card-listing/card-listing.page';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        HttpClientModule
    ],
    providers: [
     CardService
    ],
    declarations: [
        CardDeckPage,
        CardListComponent,
        CardListingPage
    ]
})
export class CardPageModule {}
