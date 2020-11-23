const mineflayer = require("mineflayer");
const { Message } = require("../lib/classes");
module.exports = {
	name: "say",
	desc: "Make the bot say something. [A3]",
	usage: "say <message>",
	/**
	 * @param {mineflayer.Bot} bot
	 * @param {Message} message
	 * @param {String[]} args
	 * @param {FormData} commands
	 */
	execute(bot, message, args, selfCmd) {
		if (message.author.authLevel() === 3) {
			if (args.length >= 1) bot.send(args.join(" "));
			else throw "ERR_USAGE";
		} else
			bot.send(
				"You don't have the required permissions. (A3 required)",
				message.author.username
			);
	},
};
