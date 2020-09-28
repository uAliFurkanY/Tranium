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
					usr.authLevel =
						parseInt(args[1]) === NaN ? 3 : parseInt(args[1]);
				} else if (
					args[0].match(
						/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/
					)
				) {
					let usr = userData(args[0]);
					usr.authLevel =
						parseInt(args[1]) === NaN ? 3 : parseInt(args[1]);
				} else {
					return bot.chat("User not found: " + args[0] + ".");
				}
				bot.chat("Successfully set auth level for " + args[0] + ".");
			} else throw "ERR_USAGE";
		} else
			bot.chat("You don't have the required permissions. (A3 required)");
	},
};
