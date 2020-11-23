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
		if (message.author.authLevel() === 2 && args.length >= 1) {
			data.prefix = args[0];
			console.log("Changed the prefix to '" + args[0] + "'.");
		} else
			bot.send(
				"The prefix is '" + data.prefix + "'.",
				message.author.username
			);
	},
};
