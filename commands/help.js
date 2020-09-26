const mineflayer = require("mineflayer");
const { Message } = require("../lib/classes");
module.exports = {
	name: "help",
	desc: "Help for the bot.",
	usage: "help",
	/**
	 * @param {mineflayer.Bot} bot
	 * @param {Message} message
	 * @param {String[]} args
	 * @param {FormData} commands
	 */
	execute(bot, message, args, selfCmd) {
		const commandList = Array.from(commands.entries()).map((x) => x[0]);
		bot.chat("[ Tranium Bot ] `List of commands: " + commandList.join(" "));
	},
};
