const mineflayer = require("mineflayer");
const { Message } = require("../lib/classes");
module.exports = {
	name: "help",
	desc: "Help for the bot.",
	usage: "help [command]",
	/**
	 * @param {mineflayer.Bot} bot
	 * @param {Message} message
	 * @param {String[]} args
	 * @param {FormData} commands
	 */
	execute(bot, message, args, selfCmd) {
		const commandList = Array.from(commands.entries()).map((x) => x[0]);
		if (args[0]) {
			if (commandList.includes(args[0])) {
				let cmd = commands.get(args[0]);
				bot.chat("> " + cmd.desc + " `Usage: " + cmd.usage);
			} else {
				bot.chat("Command not found: '" + args[0] + "'.");
			}
		} else {
			bot.chat(
				"[ Tranium Bot ] `List of commands: " + commandList.join(" ")
			);
		}
	},
};
