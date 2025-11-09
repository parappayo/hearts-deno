import { isFaceCard, Card as CardProps, Rank, Suit } from "../common/PlayingCard.ts";

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

export function Card(props: CardProps) {
    const alt = `${props.rank} of ${props.suit}`;

    return (
        <img class="card" src={getCardImagePath(props.rank, props.suit)} alt={alt} />
    )
}
