const mineflayer = require("mineflayer");
const { Message } = require("../lib/classes");

module.exports = {
	name: "op",
	desc: "Set the auth level for an user.",
	usage: "op <user|uuid> [level]",
	/**
	 * @param {mineflayer.Bot} bot
	 * @param {Message} message
	 * @param {String[]} args
	 * @param {FormData} commands
	 */
	execute(bot, message, args, selfCmd) {
		if (message.author.authLevel() === 3) {
			if (args.length >= 1) {
				let possibleUser = bot.players[args[0]];
				if (possibleUser) {
					let usr = userData(possibleUser.uuid);
					usr.authLevel = isNaN(parseInt(args[1]))
						? 3
						: parseInt(args[1]);
				} else if (
					args[0].match(
						/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/
					)
				) {
					let usr = userData(args[0]);
					usr.authLevel = isNaN(parseInt(args[1]))
						? 3
						: parseInt(args[1]);
				} else {
					return bot.send(
						"User not found: " + args[0] + ".",
						message.author.username
					);
				}
				bot.send(
					"Successfully set auth level for " + args[0] + ".",
					message.author.username
				);
			} else throw "ERR_USAGE";
		} else
			bot.send(
				"You don't have the required permissions. (A3 required)",
				message.author.username
			);
	},
};
