const mineflayer = require("mineflayer");
const { Message } = require("../lib/classes");
module.exports = {
	name: "say",
	desc: "Make the bot say something. [A3]",
	usage: "help",
	/**
	 * @param {mineflayer.Bot} bot
	 * @param {Message} message
	 * @param {String[]} args
	 * @param {FormData} commands
	 */
	execute(bot, message, args, selfCmd) {
		if (message.author.authLevel() === 3) bot.chat(args.join(" "));
	},
};
