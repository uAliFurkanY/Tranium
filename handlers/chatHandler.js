const db = require("../lib/db");
const Map = require("collections/map");
global.data = db.data();
global.userData = db.userData({
	authLevel: 0,
	isLinked: false,
	blacklisted: false,
});
const mineflayer = require("mineflayer");
const shlex = require("shlex");
const fs = require("fs");
const PREFIX = "T.";
const commandFiles = fs
	.readdirSync("./commands")
	.filter((file) => file.endsWith(".js"));
global.commands = new Map();
for (const file of commandFiles) {
	const command = require(`../commands/${file}`);
	commands.set(command.name, command);
}

if (!data.prefix) data.prefix = PREFIX;

/**
 * @param {mineflayer.Bot} bot
 * @param {string} username
 * @param {string} message
 * @param {string} translate
 * @param {Object} jsonMsg `mineflayer` actually breaks this by setting it to string. So I set it to object.
 */
function onMessage(bot, username, message, selfCmd = false) {
	if (!username) return;
	//if (username === bot.username) return;
	if (!username.match(/^[0-9a-zA-Z_]{3,16}$/)) return;
	if (!bot.players[username]) return;
	if (
		!(
			(selfCmd ? true : message.startsWith(data.prefix)) ||
			message === bot.username
		)
	)
		return;
	const user = bot.players[username];

	const usr = userData(user.uuid);
	if (usr.blacklisted) return;

	let args = shlex.split(
		selfCmd ? message : message.slice(data.prefix.length)
	);
	let command = args.shift();

	const msg = new Message(new User(user, bot, data, usr), message);

	if (!command && message === bot.username) command = "help";

	if (!commands.has(command)) return;

	try {
		commands.get(command).execute(bot, msg, args, selfCmd);
	} catch (e) {
		console.error(e);
		bot.chat("couldn't execute command: `" + e.message + "`!");
	}

	console.log(`<${username}> ${message}`);
}

module.exports = onMessage;
