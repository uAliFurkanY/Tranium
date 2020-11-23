const mineflayer = require("mineflayer");
const { Message } = require("../lib/classes");
const { userData } = require("../lib/db");

module.exports = {
	name: "blacklist",
	desc: "Make the bot blacklist someone. [A2]",
	usage: "blacklist <username|uuid>",
	/**
	 * @param {mineflayer.Bot} bot
	 * @param {Message} message
	 * @param {String[]} args
	 * @param {FormData} commands
	 */
	execute(bot, message, args, selfCmd) {
		if (message.author.authLevel() >= 2 && args[0]) {
			let potentialUser = bot.players[args[0]];
			if (potentialUser) {
				let usr = userData(potentialUser.uuid);
				usr.blacklisted = !usr.blacklisted;
				bot.send(
					"Successfully " +
						(usr.blacklisted ? "blacklisted" : "un-blacklisted") +
						" " +
						args[0] +
						".",
					message.author.username
				);
			} else if (
				args[0].match(
					/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/
				)
			) {
				let usr = userData(args[0]);
				usr.blacklisted = !usr.blacklisted;
				bot.send(
					"Successfully " +
						(usr.blacklisted ? "blacklisted" : "un-blacklisted") +
						" " +
						args[0] +
						".",
					message.author.username
				);
			} else {
				bot.send(
					"User not found: " + args[0] + ".",
					message.author.username
				);
			}
		} else if (args[0])
			bot.send(
				"You don't have the required permissions. (A2 required)",
				message.author.username
			);
		else if (message.author.authLevel() >= 2) throw "ERR_USAGE";
	},
};
