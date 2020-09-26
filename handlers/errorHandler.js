require("colors");
const { execSync } = require("child_process");
module.exports = (err) => {
	if (err.code === "MODULE_NOT_FOUND") {
		console.error(
			"ERROR".bgRed +
				" Configuration not found. Running " +
				"setup.js".cyan +
				"..."
		);
		execSync("node setup.js", { stdio: "inherit" });
	} else if (
		err.message.includes("Unexpected end of JSON input") ||
		err.message.includes("Invalid configuration")
	) {
		console.error(
			"ERROR".bgRed +
				" Configuration is corrupted. Please re-run " +
				"setup.js".cyan +
				"."
		);
	} else {
		console.error(err);
	}
};
