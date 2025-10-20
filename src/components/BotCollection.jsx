import BotCard from './BotCard';

function BotCollection({ bots, onAddBot }) {
  return (
    <div className="bot-collection">
      <h2>Bot Collection</h2>
      <div className="bots-container">
        {bots.map((bot) => (
          <BotCard
            key={bot.id}
            bot={bot}
            onBotClick={onAddBot}
          />
        ))}
      </div>
    </div>
  );
}

export default BotCollection;
