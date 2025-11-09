
export type Rank = '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'J' | 'Q' | 'K' | 'A';
export type Suit = '♥' | '♦' | '♣' | '♠';

export function isFaceCard(rank: Rank): boolean {
    return rank === 'J' || rank === 'Q' || rank === 'K' || rank === 'A';
}
