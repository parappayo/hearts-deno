import { Hand as HandProps } from "../common/PlayingCard.ts";
import { Card } from "./Card.tsx";

export function Hand(props: HandProps) {
    return (
        <div class="hand flex gap-4">
            {props.cards.map((card, i) => (
                <Card rank={card.rank} suit={card.suit} zIndex={i} top="0" left={`${i * 30}px`} />
            ))}
        </div>
    );
}
