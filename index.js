const errorHandler = require("./handlers/errorHandler");
const chatHandler = require("./handlers/chatHandler");
const tpaHandler = require("./handlers/tpaHandler");
const { Message, User } = require("./lib/classes");
global.Message = Message;
global.User = User;
global.sinceLastKill = Date.now();
const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

async function main() {
	const config = require("./config.json");
	if (!config.version) delete config.version;
	if (!config.password) delete config.password;
	if (!config.server || !config.username)
		throw Error("Invalid configuration");

	const server = config.server.split(":");
	const HOST = server.shift();
	const PORT = server.shift();

	let bot, spawned;
	await (async function createBot() {
		bot = require("./bot")(
			HOST,
			PORT,
			config.version,
			config.username,
			config.password
		);
		bot.once("spawn", () => {
			global.sinceLastKill = Date.now();
			spawned = true;
			bot.chatAddPattern(
				/^[0-9a-zA-Z_]{3,16} wants to teleport/,
				"tpa",
				"Teleport"
			);
			bot.chatAddPattern(/.*/, "chat", "Any message");
			bot.on("tpa", (u, m, t, cm) => tpaHandler(bot, u, m, t, cm));
			bot.on("chat", (u, m, t, cm) => chatHandler(bot, u, m, t, cm));
		}).on("end", async () => {
			spawned = false;
			setTimeout(createBot(), 5000); //this is better
		});
	})();

	rl.on("line", (line) => {
		if (spawned) {
			chatHandler(bot, bot.username, line, true);
		} else {
			console.log("BOT NOT READY".bgYellow);
		}
	});

	return "MAIN DONE".bgWhite.black;
}

main().then(console.log).catch(errorHandler);
