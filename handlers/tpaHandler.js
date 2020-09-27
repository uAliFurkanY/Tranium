const mineflayer = require("mineflayer");
/**
 * @param {mineflayer.Bot} bot
 * @param {string} username
 * @param {string} message
 * @param {string} translate
 * @param {Object} jsonMsg `mineflayer` actually breaks this by setting it to string. So I set it to object.
 */
function onTpa(bot, username, message, selfCmd = false) {
	if (!message.extra) return;
	let msg = message.extra
		.map((x) => x.text)
		.join("")
		.split(" ");
	let user = bot.players[msg[0]];
	if (!user) return;
	console.log("[TPA] " + user.username);
	let usr = userData(user.uuid);

	if ((data.mode > 0 && !usr.authLevel > 0) || usr.blacklisted) {
		bot.chat(
			"/msg " +
				user.username +
				" You are not allowed to teleport to the bot."
		);
	} else {
		bot.chat("/tpy " + user.username);
	}
}

module.exports = onTpa;
