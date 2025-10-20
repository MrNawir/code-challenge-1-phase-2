function BotCard({ bot, onBotClick, onDelete }) {
  const handleDelete = (e) => {
    e.stopPropagation();
    onDelete(bot.id);
  };

  return (
    <div className="bot-card" onClick={() => onBotClick(bot)}>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p className="bot-class">{bot.bot_class}</p>
      <div className="bot-stats">
        <div className="stat">
          <span className="stat-label">Health:</span>
          <span className="stat-value">{bot.health}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Damage:</span>
          <span className="stat-value">{bot.damage}</span>
        </div>
        <div className="stat">
          <span className="stat-label">Armor:</span>
          <span className="stat-value">{bot.armor}</span>
        </div>
      </div>
      <p className="catchphrase">{bot.catchphrase}</p>
      {onDelete && (
        <button className="delete-btn" onClick={handleDelete}>
          x
        </button>
      )}
    </div>
  );
}

export default BotCard;
