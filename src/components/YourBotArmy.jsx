import BotCard from './BotCard';

function YourBotArmy({ army, onRemoveBot, onDeleteBot }) {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      <div className="army-container">
        {army.length === 0 ? (
          <p className="empty-message">No bots enlisted yet. Click on a bot below to add it to your army!</p>
        ) : (
          army.map((bot) => (
            <BotCard
              key={bot.id}
              bot={bot}
              onBotClick={onRemoveBot}
              onDelete={onDeleteBot}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default YourBotArmy;
