const mineflayer = require("mineflayer");
class User {
	user;
	uuid;
	username;
	bot;
	data;
	userData;
	/**
	 * @param {Object} user
	 * @param {mineflayer.Bot} bot
	 * @param {Object} data
	 * @param {Object} userData
	 */
	constructor(user, bot, data, userData) {
		this.user = user;
		this.uuid = user.uuid;
		this.username = user.username;
		this.bot = bot;
		this.data = data;
		this.userData = userData;
	}
	authLevel() {
		if (this.uuid === this.bot.player.uuid) return 3;
		else return this.userData.authLevel;
	}
	latency() {
		return this.user.ping;
	}
}

class Message {
	author;
	message;
	/**
	 * @param {User} user
	 * @param {string} message
	 */
	constructor(user, message) {
		this.author = user;
		this.content = message;
	}
}

module.exports = {
	User,
	Message,
};
