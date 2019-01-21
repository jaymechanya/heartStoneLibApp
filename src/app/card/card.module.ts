import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';
import {CommonModule} from '@angular/common';
import {CardDeckPage} from './card-deck/card-deck.page';
import {HttpClientModule} from '@angular/common/http';
import {CardService} from './shared/card.service';

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
        CardDeckPage
    ]
})
export class CardPageModule {}
