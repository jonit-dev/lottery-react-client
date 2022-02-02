import React, { useEffect, useState } from "react";
import { lotteryContract } from "./contracts/lotteryContract";
import { ILotteryContract } from "./types/LotteryContractTypes";

function App() {
  const [lotterySCData, setLotterySCData] = useState<ILotteryContract>({
    manager: "",
    players: [],
  });

  useEffect(() => {
    (async () => {
      const manager = await lotteryContract.methods.manager().call();

      console.log(manager);

      setLotterySCData((prev) => ({
        ...prev,
        manager,
      }));
    })();
  }, []);

  return (
    <div>
      <h1>Lottery SC</h1>

      <p>Manager: {lotterySCData.manager}</p>
    </div>
  );
}

export default App;
