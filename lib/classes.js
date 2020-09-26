class User {
	uuid = "";
	username = "";
	bot;
	data;
	userData;
	constructor(uuid, username, bot, data, userData) {
		this.uuid = uuid;
		this.username = username;
		this.bot = bot;
		this.data = data;
		this.userData = userData;
	}
	authLevel() {
		if (this.data) return 3;
		else return false;
	}
}

class Message {}

module.exports = {
	User,
	Message,
};
