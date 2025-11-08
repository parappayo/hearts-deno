

// from the /game-state endpoint
export interface TableStateResponse {
	players: object[];
	currentPlayersTurn: number;
	cardsPlayed: object[] | null;
	rounds: object[] | null;
}

export class TableState {
	test: string;

	constructor(resp: TableStateResponse | null)
	{
		this.test = resp ? JSON.stringify(resp) : "no data";
	}
}
