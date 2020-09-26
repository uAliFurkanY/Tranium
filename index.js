const errorHandler = require("./handlers/errorHandler");
const chatHandler = require("./handlers/chatHandler");
const net = require("net");

async function main() {
	const config = require("./config.json");
	if (!config.version) delete config.version;
	if (!config.password) delete config.version;
	if (!config.server || !config.username)
		throw Error("Invalid configuration");

	const server = config.server.split(":");
	const HOST = server.shift();
	const PORT = server.shift();

	let bot;
	const serv = net.createServer((sock) => {
		sock.on("data", (msg) => {
			msg = msg.toString().trim();
			try {
				console.log("SENT " + msg);
				bot.chat(msg);
			} catch (e) {
				sock.write(e.message + "\n");
			}
		});
	});
	serv.listen(31337);
	(function createBot() {
		bot = require("./bot")(
			HOST,
			PORT,
			config.version,
			config.username,
			config.password
		);
		bot.once("spawn", () => {
			bot.chatAddPattern(/.*/, "chat", "Any message");
			bot.on("chat", (u, m, t, cm) => chatHandler(bot, u, m, t, cm));
		}).on("end", () => {
			createBot();
		});
	})();

	return "MAIN DONE".bgWhite.black;
}

main().then(console.log).catch(errorHandler);
