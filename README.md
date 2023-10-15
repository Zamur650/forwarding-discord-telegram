# Forwarding discord to telegram bot

This bot can help you to read discord messages in telegram.

> **Warning**:
> Selfbots are against Discord's Terms of Service, use at your own risk!

## Setup

1. Install node.js from <https://nodejs.org/en/>

2. Clone this project via `git clone https://github.com/taprisu/forwarding-discord-telegram.git`

3. Create `.env` file

   ```env
   DISCORD_TOKEN=<YOUR_DISCORD_TOKEN>
   TELEGRAM_TOKEN=<YOUR_TELEGRAM_TOKEN>
   TELEGRAM_CHAT_ID=<YOUR_TELEGRAM_CHAT_ID>
   ```

4. Config your bot via [`config.json`](сonfig.json) (insert your values)

   ```json
   {
   	"mutedGuildsIds": [1013671171029467227],
   	"allowedGuildsIds": [],
   	"mutedChannelsIds": [1013671171029467227],
   	"allowedChannelsIds": [],
   	"allowedUsersIds": [],
   	"mutedUsersIds": [1038694628490235904],
   	"channelConfigs": {
   		"1013671171029467227": {
   			"muted": [869088074758520832],
   			"allowed": []
   		}
   	},
   	"showDate": true,
   	"showChat": true,
   	"stackMessages": false
   }
   ```

5. Install dependencies via

   `npm i` / `yarn` / `pnpm i`

6. Run bot via

   `npm run start` / `yarn start` / `pnpm run start`

### 🎉 Now you got your bot running 🎉
