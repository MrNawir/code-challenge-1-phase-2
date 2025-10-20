# Bot Battlr

Welcome to Bot Battlr, the one and only spot in the known universe where you can custom build your own Bot Army!

## Author

Phase 2 Code Challenge Project

## Description

Bot Battlr is a React application that allows users to browse through a collection of bots and build their own custom bot army. Users can view bot profiles, enlist bots into their army, release bots from service, and permanently discharge bots from the system.

## Features

- View profiles of all available bots
- Add bots to your personal army (each bot can only be enlisted once)
- Release bots from your army by clicking on them
- Permanently discharge bots by clicking the red "x" button
- Real-time updates with JSON Server backend

## Technologies Used

- React 19.1.1
- Vite 7.1.7
- JSON Server (for backend API)
- CSS3

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
   or
   ```bash
   bun install
   ```

## Running the Application

Start both the backend and frontend with a single command:

```bash
npm run dev
```

This will start:
- JSON Server (backend) on `http://localhost:8001`
- React app (frontend) on `http://localhost:5173`

Open your browser and navigate to `http://localhost:5173`

## API Endpoints

- `GET /bots` - Fetch all bots
- `DELETE /bots/:id` - Delete a specific bot

## Project Structure

```
src/
├── components/
│   ├── BotCard.jsx        # Individual bot card component
│   ├── BotCollection.jsx  # Collection of all available bots
│   └── YourBotArmy.jsx    # User's enlisted bots
├── App.jsx                # Main application component
├── App.css               # Application styles
└── main.jsx              # Entry point
```

## How to Use

1. Browse the bot collection at the bottom of the page
2. Click on any bot to add it to your army (shown in green section at top)
3. Click on a bot in your army to release it (remove from army)
4. Click the red "x" button to permanently delete a bot from the system

## License

MIT License
