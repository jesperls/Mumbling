export interface GameCard {
    mumbled: string;
    actual: string;
}

export interface Category {
    title: string;
    amount?: number;
}

export interface GameCardCategory {
    category: Category;
    cards: GameCard[];
}
