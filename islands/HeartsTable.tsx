import { useEffect, useState } from "preact/hooks";
import { TableState, TableStateResponse } from "../common/TableState.ts";
import { Hand } from "../components/index.ts";

export default function HeartsTable() {

    const [tableState, setTableState] = useState<TableState>(new TableState(null));

    const getTableState = async () => {
        const resp = await fetch('http://localhost:8080/game-state');
        if (!resp.ok) {
            console.error("Failed to fetch table state:", resp.statusText);
            return;
        }
        const data: TableStateResponse = await resp.json();
        setTableState(new TableState(data));
    };

    useEffect(() => {
        getTableState();
    }, []);

    console.log(tableState.test);
    console.log(tableState.hand);

    return (
        <div class="flex gap-8 py-6">
            {tableState.hand ? <Hand cards={tableState.hand.cards} /> : null}
        </div>
    );
}
