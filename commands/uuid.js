const mineflayer = require("mineflayer");
const { Message } = require("../lib/classes");
module.exports = {
	name: "uuid",
	desc: "Get the UUID of a player",
	usage: "uuid [player]",
	/**
	 * @param {mineflayer.Bot} bot
	 * @param {Message} message
	 * @param {String[]} args
	 * @param {FormData} commands
	 */
	execute(bot, message, args, selfCmd) {
		let user = bot.players[args[0]];
		if (!user) user = message.author.user;
		bot.chat(user.uuid, user.username);
	},
};
