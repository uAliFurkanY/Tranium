const mineflayer = require("mineflayer");
const { Message } = require("../lib/classes");

module.exports = {
	name: "get",
	desc: "Get a value in the main database.",
	usage: "get <key>",
	/**
	 * @param {mineflayer.Bot} bot
	 * @param {Message} message
	 * @param {String[]} args
	 * @param {FormData} commands
	 */
	execute(bot, message, args, selfCmd) {
		if (message.author.authLevel() === 3) {
			if (args.length >= 1) bot.chat(JSON.stringify(data[args.shift()]));
			else throw "ERR_USAGE";
		} else
			bot.chat("You don't have the required permissions. (A3 required)");
	},
};
