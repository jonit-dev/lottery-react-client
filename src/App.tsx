import React, { useEffect } from "react";
import { web3 } from "./libs/web3";

function App() {
  useEffect(() => {
    (async () => {
      console.log(await web3.eth.getAccounts());
    })();
  }, []);

  return (
    <div>
      <h1>Lottery SC</h1>
    </div>
  );
}

export default App;
