import { Head } from "fresh/runtime";
import { define } from "../utils.ts";
import HeartsTable from "../islands/HeartsTable.tsx";

export default define.page(function Home(_ctx) {

  return (
    <div class="px-4 py-8 mx-auto fresh-gradient min-h-screen">
      <Head>
        <title>Hearts</title>
      </Head>
      <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
        <HeartsTable />
      </div>
    </div>
  );
});
