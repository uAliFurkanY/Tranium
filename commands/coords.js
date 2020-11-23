const mineflayer = require("mineflayer");
const { Message } = require("../lib/classes");

module.exports = {
	name: "coords",
	desc: "Get the coords of the bot.",
	usage: "coords",
	/**
	 * @param {mineflayer.Bot} bot
	 * @param {Message} message
	 * @param {String[]} args
	 * @param {FormData} commands
	 */
	execute(bot, message, args, selfCmd) {
		if (data.mode > 0 && !message.author.authLevel() > 0) {
			bot.send(
				"You don't have the required permissions. (A1 required)",
				message.author.username
			);
		} else {
			let coords = bot.player.entity.position
				.toArray()
				.map((x, idx) => ["X", "Y", "Z"][idx] + "=" + x.toFixed(2))
				.join(" ");
			bot.send(
				"My coordinates are " + coords + ".",
				message.author.username
			);
		}
	},
};
