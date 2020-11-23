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
			bot.send(
				"You don't have the required permissions. (A1 required)",
				message.author.username
			);
		} else {
			if (
				sinceLastKill + 10000 >= Date.now() &&
				!message.author.authLevel() > 0
			) {
				bot.send(
					"You can only kill the bot every 10 seconds.",
					message.author.username
				);
			} else {
				global.sinceLastKill = Date.now();
				bot.send("/kill");
			}
		}
	},
};
