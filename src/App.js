import { useEffect, useState } from "react";
import "./App.css";
import { BotCollection } from "./BotCollection";
import { YourBotArmy } from "./YourBotArmy";

function App() {
  const [bots, setBots] = useState([]);
  const [enlistedBots, setEnlistedBots] = useState([]);

  const baseUrl = "http://localhost:8001/bots";

  useEffect(() => {
    fetch(baseUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => setBots(data));
  }, []);

  function deleteBot(id) {
    const updatedBot = bots.filter((bot) => bot.id !== id);
    setBots(updatedBot);
  }

  return (
    <div className="App">
      <h1>BOT BATTLR</h1>
      <section>
        <h2>Your Bot Army</h2>
        {enlistedBots.length === 0 ? (
          <>
            <h4>Your Bot Army is empty.</h4>
            <h4>Please select your bot</h4>
          </>
        ) : (
          <YourBotArmy
            onDeleteBot={deleteBot}
            bots={bots}
            enlistedBots={enlistedBots}
            setEnlistedBots={setEnlistedBots}
          />
        )}
      </section>
      <section>
        <h2>Bot Collection</h2>
        <BotCollection
          bots={bots}
          enlistedBots={enlistedBots}
          setEnlistedBots={setEnlistedBots}
        />
      </section>
    </div>
  );
}

export default App;
