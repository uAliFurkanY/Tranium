const mineflayer = require("mineflayer");
const { Message } = require("../lib/classes");

module.exports = {
	name: "mode",
	desc: "Set/get the mode.",
	usage: "mode [value]",
	/**
	 * @param {mineflayer.Bot} bot
	 * @param {Message} message
	 * @param {String[]} args
	 * @param {FormData} commands
	 */
	execute(bot, message, args, selfCmd) {
		if (message.author.authLevel() === 2 && args.length >= 1) {
			data.mode = parseInt(args[0]) || 0;
			bot.send(
				"Set the mode to " + parseInt(args[0]) || 0 + ".",
				message.author.username
			);
		} else
			bot.send("The mode is " + data.mode + ".", message.author.username);
	},
};
