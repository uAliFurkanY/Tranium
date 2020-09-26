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
	let usr = userData(user.uuid);
	if (data.mode > 0 && !usr.authLevel > 0) {
		bot.chat(
			"/msg " + msg[0] + " You are not allowed to teleport to the bot."
		);
	} else {
		bot.chat("/tpy " + msg[0]);
	}
}

module.exports = onTpa;
