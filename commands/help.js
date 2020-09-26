const mineflayer = require("mineflayer");
const { Message, User } = require("../lib/classes");
module.exports = {
	name: "help",
	desc: "Help for the bot.",
	usage: "help",
	/**
	 *
	 * @param {mineflayer.Bot} bot
	 * @param {*} Message
	 * @param {*} User
	 * @param {*} args
	 */
	execute(bot, Message, User, args) {},
};
