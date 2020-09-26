const db = require("../lib/db");
const data = db.data();
const codes = db.data("codes");
const userData = db.userData({ authLevel: 0, isLinked: false });
const { Message, User } = require("../lib/classes");
const mineflayer = require("mineflayer");
const shlex = require("shlex");
const fs = require("fs");
const PREFIX = "T.";
const commandFiles = fs
	.readdirSync("./commands")
	.filter((file) => file.endsWith(".js"));
process.env.COMMANDS = new FormData();
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	process.env.COMMANDS.set(command.name, command);
}

if (!data.prefix) data.prefix = PREFIX;

/**
 * @param {mineflayer.Bot} bot
 * @param {string} username
 * @param {string} message
 * @param {string} translate
 * @param {Object} jsonMsg `mineflayer` actually breaks this by setting it to string. So I set it to object.
 */
function onMessage(bot, username, message, translate, jsonMsg) {
	if (!username) return;
	//if (username === bot.username) return;
	if (!username.match(/^[0-9a-zA-Z_]{3,16}$/)) return;
	if (!message.startsWith(data.prefix)) return;

	let args = shlex.split(message.slice(data.prefix.length));
	let command = args.shift();

	if (!process.env.COMMANDS.has(command)) return;

	try {
		process.env.COMMANDS.get(command).execute();
	} catch (e) {
		console.error(e);
		bot.chat("couldn't execute command: `" + e.message + "`!");
	}

	console.log(`<${username}> ${message}`);
}

module.exports = onMessage;
