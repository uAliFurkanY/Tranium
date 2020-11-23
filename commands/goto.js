const mineflayer = require("mineflayer");
const navigate = require("mineflayer-navigate")(mineflayer);
const { Vec3 } = require("vec3");
const { Message } = require("../lib/classes");

module.exports = {
	name: "goto",
	desc: "Go to somewhere idk im lazy.",
	usage: "goto <X> <Y> <Z>",
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
		} else if (args.length < 3) {
			throw "ERR_USAGE";
		} else {
			bot.navigate.to(new Vec3(...args));
		}
	},
};
