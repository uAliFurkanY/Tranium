const mineflayer = require("mineflayer");
const { Message } = require("../lib/classes");

module.exports = {
	name: "set",
	desc: "Set a value in the main database.",
	usage: "set <key> <value>",
	/**
	 * @param {mineflayer.Bot} bot
	 * @param {Message} message
	 * @param {String[]} args
	 * @param {FormData} commands
	 */
	execute(bot, message, args, selfCmd) {
		if (message.author.authLevel() === 3) {
			if (args.length >= 2)
				data[args.shift()] = JSON.parse(args.join(" "));
			else throw "ERR_USAGE";
		} else
			bot.chat("You don't have the required permissions. (A3 required)");
	},
};
