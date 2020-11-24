const mineflayer = require("mineflayer");
const navigate = require("mineflayer-navigate")(mineflayer);
const { Vec3 } = require("vec3");
const { Message } = require("../lib/classes");

module.exports = {
	name: "stop",
	desc: "Stop the current pathfinding process.",
	usage: "stop",
	/**
	 * @param {mineflayer.Bot} bot
	 * @param {Message} message
	 * @param {String[]} args
	 * @param {FormData} commands
	 */
	execute(bot, message, args, selfCmd) {
		if (!bot.navigate) navigate(bot);
		if (data.mode > 0 && !message.author.authLevel() > 0) {
			bot.send(
				"You don't have the required permissions. (A1 required)",
				message.author.username
			);
		} else {
			bot.navigate.stop();
		}
	},
};
