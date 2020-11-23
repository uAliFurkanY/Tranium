require("colors");
const mineflayer = require("mineflayer");
let login = {};

/**
 * Create bot instance and set up auto-reconnect.
 * @param {string} host
 * @param {string|number} port
 * @param {string} version
 * @param {string} user
 * @param {string} pass
 */
function createBot(host, port, version, user, pass) {
	login.host = host || login.host;
	login.port = port || login.port;
	login.version = version || login.version;
	login.username = user || login.username;
	login.password = pass || login.password;
	let bot = mineflayer.createBot(login);
	bot.send = (msg, user = "") => {
		data.chat === "msg" && user
			? bot.chat(`/msg ${user} ${msg}`)
			: bot.chat(msg);
	};
	bot._client.on("session", (ses) => {
		console.log("SESSION".bgMagenta);
		login.session = ses;
	});
	bot.once("login", () => {
		console.log("LOGIN".bgBlue);
	})
		.once("spawn", () => {
			console.log("SPAWN".bgGreen);
		})
		.on("error", (err) => {
			console.log("ERROR".bgRed);
			console.log(err);
		})
		.on("kicked", (err) => {
			console.log("KICKED".bgRed);
			console.log(err);
		})
		.on("end", () => {
			console.log("END".bgRed);
		});
	return bot;
}
module.exports = createBot;
