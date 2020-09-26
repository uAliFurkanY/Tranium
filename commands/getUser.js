const mineflayer = require("mineflayer");
const { Message } = require("../lib/classes");

module.exports = {
	name: "get-user",
	desc: "Get a value for the specified user in the user database.",
	usage: "get-user <user|uuid> <key>",
	/**
	 * @param {mineflayer.Bot} bot
	 * @param {Message} message
	 * @param {String[]} args
	 * @param {FormData} commands
	 */
	execute(bot, message, args, selfCmd) {
		if (message.author.authLevel() === 3) {
			if (args.length >= 2) {
				let possibleUser = bot.players[args[0]];
				if (possibleUser) {
					let usr = userData(possibleUser.uuid);
					args.shift();
					bot.chat(JSON.stringify(usr[args.shift()]));
				} else if (
					args[0].match(
						/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/
					)
				) {
					let usr = userData(args.shift());
					bot.chat(JSON.stringify(usr[args.shift()]));
				} else {
					return bot.chat("User not found: " + args[0] + ".");
				}
			} else throw "ERR_USAGE";
		} else
			bot.chat("You don't have the required permissions. (A3 required)");
	},
};
