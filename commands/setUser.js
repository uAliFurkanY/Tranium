const mineflayer = require("mineflayer");
const { Message } = require("../lib/classes");

module.exports = {
	name: "set-user",
	desc: "Set a value for the specified user in the user database.",
	usage: "set-user <user|uuid> <key> <value>",
	/**
	 * @param {mineflayer.Bot} bot
	 * @param {Message} message
	 * @param {String[]} args
	 * @param {FormData} commands
	 */
	execute(bot, message, args, selfCmd) {
		if (message.author.authLevel() === 3) {
			if (args.length >= 3) {
				let possibleUser = bot.players[args[0]];
				if (possibleUser) {
					let usr = userData(possibleUser.uuid);
					args.shift();
					usr[args.shift()] = JSON.parse(args.join(" "));
				} else if (
					args[0].match(
						/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/
					)
				) {
					let usr = userData(args.shift());
					usr[args.shift()] = args.join(" ").match(/^[0-9]+$/)
						? parseInt(args.join(" "))
						: args.join(" ");
				} else {
					return bot.send(
						"User not found: " + args[0] + ".",
						message.author.username
					);
				}
				bot.send(
					"Successfully set key/value pair.",
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
