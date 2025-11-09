import { isFaceCard, Card as CardData, Rank, Suit } from "../common/PlayingCard.ts";

function getCardImagePath(rank: Rank, suit: Suit): string {
    const rankName = rank === 'J' ? 'jack' :
                     rank === 'Q' ? 'queen' :
                     rank === 'K' ? 'king' :
                     rank === 'A' ? 'ace' :
                     rank;
    const suitName = suit === '♥' ? 'hearts' :
                     suit === '♦' ? 'diamonds' :
                     suit === '♣' ? 'clubs' :
                     'spades';
    const altCard = isFaceCard(rank) && (rank !== 'A' || suit === '♠') ? '2' : '';
    return `cards/${rankName}_of_${suitName}${altCard}.svg`;
}

type CardProps = CardData & {
    zIndex: number;
    top: string;
    left: string;
};

export function Card(props: CardProps) {
    const { rank, suit, zIndex, top, left } = props;

    const alt = `${rank} of ${suit}`;
    return (
        <img class="card" src={getCardImagePath(rank, suit)} alt={alt} style={{ zIndex, top, left }} />
    )
}
