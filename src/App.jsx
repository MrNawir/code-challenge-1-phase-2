import { useState, useEffect } from 'react'
import './App.css'
import YourBotArmy from './components/YourBotArmy'
import BotCollection from './components/BotCollection'

function App() {
  const [bots, setBots] = useState([])
  const [army, setArmy] = useState([])

  useEffect(() => {
    fetch('http://localhost:8001/bots')
      .then(response => response.json())
      .then(data => setBots(data))
      .catch(error => console.error('Error fetching bots:', error))
  }, [])

  const addBotToArmy = (bot) => {
    if (!army.find(b => b.id === bot.id)) {
      setArmy([...army, bot])
    }
  }

  const removeBotFromArmy = (bot) => {
    setArmy(army.filter(b => b.id !== bot.id))
  }

  const deleteBot = (botId) => {
    fetch(`http://localhost:8001/bots/${botId}`, {
      method: 'DELETE',
    })
      .then(() => {
        setBots(bots.filter(b => b.id !== botId))
        setArmy(army.filter(b => b.id !== botId))
      })
      .catch(error => console.error('Error deleting bot:', error))
  }

  return (
    <div className="app">
      <h1>Bot Battlr</h1>
      <YourBotArmy
        army={army}
        onRemoveBot={removeBotFromArmy}
        onDeleteBot={deleteBot}
      />
      <BotCollection
        bots={bots}
        onAddBot={addBotToArmy}
      />
    </div>
  )
}

export default App
