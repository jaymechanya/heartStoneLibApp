import {Injectable} from '@angular/core';
import {of as ObservableOf, Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CardDeck, Card} from './card.model';

@Injectable()
export class CardService {

    private readonly HS_API_URL = 'https://omgvamp-hearthstone-v1.p.mashape.com';
    private readonly API_KEY = 'TloU2Nmkphmsh7zNOZqu3tewm8fcp1kJqOtjsnYiQHoRo6wO4g';

    private headers: HttpHeaders;

    constructor(private http: HttpClient) {
        this.headers = new HttpHeaders({'X-Mashape-Key': this.API_KEY});
    }

    public replaceCardTextLine(text: string) {
        return text ? text.replace(new RegExp("\\\\n", "g"), ", ") : 'No Description';
    }

    public getAllCardDecks(): Observable<CardDeck[]> {
        return this.http.get<CardDeck[]>(`${this.HS_API_URL}/info`, {headers: this.headers});
    }

    public getCardsByDeck(cardDeckGroup: string, cardDeck: string): Observable<Card[]> {
        return this.http.get<Card[]>(`${this.HS_API_URL}/cards/${cardDeckGroup}/${cardDeck}`, {headers: this.headers});
    }

    public getCardbyId(cardId: string): Observable<Card[]> {
        return this.http.get<Card[]>(`${this.HS_API_URL}/cards/${cardId}`, {headers: this.headers});
    }

}

// Original Data --------------------**
// private readonly cardDecks: string[] = [
//     'Druid', 'Mage', 'Warrior', 'Rogue', 'Shaman', 'Priest',
//     'Warlock', 'Hunter', 'Paladin'
// ];

// public getAllCardDecks(): Observable<CardDeck[]> {
//     return ObservableOf(this.cardDecks);
// }
