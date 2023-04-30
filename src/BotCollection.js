import React, { useState } from "react";

export const BotCollection = ({ bots, enlistedBots, setEnlistedBots }) => {
  const [clickedBots, setClickedBots] = useState([]);

  const handleClick = (bot) => {
    if (!clickedBots.includes(bot.id)) {
      // check if bot is already clicked
      setEnlistedBots([...enlistedBots, bot]); // add the clicked bot to the enlistedBots array
      setClickedBots([...clickedBots, bot.id]); // add the bot's id to the clickedBots list
    }
  };

  const myBots = bots.map((bot) => {
    return (
      <div
        onClick={() => handleClick(bot)}
        className="BotContainer"
        key={bot.id}
      >
        <h3>{bot.name}</h3>
        <img className="BotImg" src={bot.avatar_url} alt="bot"></img>

        <section className="info">
          <p>Health:{bot.health}</p>
          <p>Armor:{bot.armor}</p>
          <p>Damage:{bot.damage}</p>
        </section>
      </div>
    );
  });

  return <div className="BotCollection">{myBots}</div>;
};
