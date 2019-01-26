export interface CardDeck {
    name: string;
    types: string[];
}

export interface Card {
    cardId: string;
    cardSet: string;
    favorite: boolean;
    name: string;
    text: string;
    img: string;
    imgGold: string;
    health: number;
    attack: number;
    cost: number;
    dbfId: string;
    faction: string;
    playerClass: string;
    locale: string;
    type: string;
    rarity: string;
}
