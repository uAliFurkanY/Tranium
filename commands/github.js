const mineflayer = require("mineflayer");
const { Message } = require("../lib/classes");
module.exports = {
	name: "github",
	desc: "Get the GitHub repo URL.",
	usage: "github",
	/**
	 * @param {mineflayer.Bot} bot
	 * @param {Message} message
	 * @param {String[]} args
	 * @param {FormData} commands
	 */
	execute(bot, message, args, selfCmd) {
		bot.chat("https://github.com/uAliFurkanY/Tranium");
	},
};
