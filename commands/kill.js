const mineflayer = require("mineflayer");
const { Message } = require("../lib/classes");

module.exports = {
	name: "kill",
	desc: "Kill the bot.",
	usage: "kill",
	/**
	 * @param {mineflayer.Bot} bot
	 * @param {Message} message
	 * @param {String[]} args
	 * @param {FormData} commands
	 */
	execute(bot, message, args, selfCmd) {
		if (data.mode > 0 && !message.author.authLevel() > 0) {
			bot.chat("You don't have the required permissions. (A1 required)");
		} else bot.chat("/kill");
	},
};
