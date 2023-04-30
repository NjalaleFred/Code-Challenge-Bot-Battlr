import React from "react";

export const YourBotArmy = ({ enlistedBots, setEnlistedBots, onDeleteBot }) => {
  const handleClick = (bot) => {
    // Filter out the bot that needs to be released and update the enlistedBots state
    setEnlistedBots(
      enlistedBots.filter((enlistedBot) => enlistedBot.id !== bot.id)
    );
  };

  const handleDelete = ({id})=>{
    fetch(`http://localhost:8001/bots/${id}`,{
        method: "DELETE"
    })
    onDeleteBot(id)
  }

  const clickedBots = enlistedBots.map((bot) => {
    return (
      <div
        onClick={() => handleClick(bot)}
        className="ArmyContainer"
        key={bot.id}
      >
        <h3>
            {bot.name}
            <button onClick={()=> handleDelete(bot)} >X</button>
        </h3>
        <img className="BotImg" src={bot.avatar_url} alt="bot"></img>

        <section className="info">
          <p>Health:{bot.health}</p>
          <p>Armor:{bot.armor}</p>
          <p>Damage:{bot.damage}</p>
        </section>
      </div>
    );
  });

  return <div className="ArmyCollection">{clickedBots}</div>;
};
