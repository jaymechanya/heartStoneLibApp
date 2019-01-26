import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {CardService} from './shared/card.service';

import {CardDeckPage} from './card-deck/card-deck.page';
import {CardListComponent} from './components/card-list.component';
import {CardListingPage} from './card-listing/card-listing.page';
import {CardDetailPage} from './card-detail/card-detail.page';
import {LoaderService} from '../shared/service/loader.service';
import {ToastService} from '../shared/service/toast.service';
import {AlertService} from '../shared/service/alert.service';

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        HttpClientModule
    ],
    providers: [
        CardService,
        LoaderService,
        ToastService,
        AlertService
    ],
    declarations: [
        CardDeckPage,
        CardListComponent,
        CardListingPage,
        CardDetailPage
    ]
})
export class CardPageModule {}
