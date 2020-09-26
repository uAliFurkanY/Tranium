const mineflayer = require("mineflayer");
const { Message } = require("../lib/classes");

module.exports = {
	name: "prefix",
	desc: "Set/get the prefix.",
	usage: "prefix [value]",
	/**
	 * @param {mineflayer.Bot} bot
	 * @param {Message} message
	 * @param {String[]} args
	 * @param {FormData} commands
	 */
	execute(bot, message, args, selfCmd) {
		if (message.author.authLevel() === 3) {
			if (args.length >= 1) data.prefix = args[1];
			else throw "ERR_USAGE";
		} else bot.chat(data.prefix);
	},
};
