import { useEffect, useState } from "preact/hooks";
import { TableState } from "../common/TableState.ts";

export default function HeartsTable() {

    const [tableState, setTableState] = useState<TableState>(new TableState("uninitialized"));

    const getTableState = async () => {
        const resp = await fetch('http://localhost:8080/table-state');
        console.log("fetched", resp);

        const initialState = new TableState("Welcome to Hearts!");
        console.log("got here", initialState)
        setTableState(initialState);
    };

    useEffect(() => {
        getTableState();
    }, []);

    return (
        <div class="flex gap-8 py-6">{tableState.test}</div>
    );
}
