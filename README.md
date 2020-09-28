# Tranium Bot

A Minecraft bot that can be modified easily. Useful for off-brand anarchy servers (mostly 0b0t).

[How to add custom commands](#custom-commands)

### Upcoming Features

-   `goto` command

## **Setup**

#### Note: You'll need [build tools](#build-tools)

```sh
git clone https://github.com/uAliFurkanY/Tranium
cd Tranium
npm i
npm run configure
npm start
```

### **Updates**

In the bot's directory and while the bot is stopped,

```
git pull
npm i
npm start
```

### Build Tools

#### **Windows**

In an administartor powershell, enter

```bat
npm install --global windows-build-tools
```

#### **Linux**

Simply find the `build-essential` package in your package manager.

Debian based systems:

```sh
sudo apt install build-essential
```

## Custom Commands

Create a `commandName.js` in the `commands` folder.

Edit it for your needs.

Example:

```js
const mineflayer = require("mineflayer");
const { Message } = require("../lib/classes");

module.exports = {
	name: "random",
	desc: "Get a random number.",
	usage: "random",
	/**
	 * @param {mineflayer.Bot} bot
	 * @param {Message} message
	 * @param {String[]} args
	 * @param {FormData} commands
	 */
	execute(bot, message, args, selfCmd) {
		bot.chat(
			"Here is your random number from 1-50: " +
				Math.floor(Math.random() * 50) +
				1
		);
	},
};
```
