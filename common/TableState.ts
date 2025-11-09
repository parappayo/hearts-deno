import { Hand, Rank, Suit } from "../common/PlayingCard.ts";

interface PlayerState {
	Hand: { Cards: { Rank: string; Suit: string }[] };
}

// from the /game-state endpoint
export interface TableStateResponse {
	Players: PlayerState[];
	CurrentPlayersTurn: number;
	CardsPlayed: object[] | null;
	Rounds: object[] | null;
}

function convertPlayerStateToHand(player: PlayerState | null): Hand {
	if (!player) {
		return { cards: [] };
	}
	return { cards: player.Hand.Cards.map(card => ({ rank: card.Rank as Rank, suit: card.Suit as Suit })) };
};

export class TableState {
	test: string;
	hand: Hand | null;

	constructor(resp: TableStateResponse | null)
	{
		// TODO: remove this.test and make sure only the player's own hand is in the response body
		this.test = resp ? JSON.stringify(resp) : "no data";
		this.hand = convertPlayerStateToHand(resp?.Players[0] || null);
	}
}
