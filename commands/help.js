const mineflayer = require("mineflayer");
const { Message, User } = require("../lib/classes");
module.exports = {
	name: "help",
	desc: "Help for the bot.",
	usage: "help",
	/**
	 * @param {mineflayer.Bot} bot
	 * @param {Message} Message
	 * @param {User} User
	 * @param {String[]} args
	 */
	execute(bot, Message, User, args) {},
};
