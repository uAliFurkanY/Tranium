const inquirer = require("inquirer");
const { supportedVersions } = require("mineflayer");
const fs = require("fs").promises;
const prettier = require("prettier");
require("colors");
async function main() {
	const q = await inquirer.prompt([
		{
			type: "input",
			name: "server",
			default: "mf.a68agaming.net",
			message: "Server IP:PORT",
			/** @param {string} ans */
			validate(ans) {
				ans = ans.trim();
				if (!ans) return "Invalid address.";
				if (ans.includes(":")) {
					const port = parseInt(ans.split(":")[1]);
					if (!(port < 65536 || port > 0))
						return "Port not in range 1 - 65536.";
				}
				return true;
			},
		},
		{
			type: "input",
			name: "version",
			message: "Client version (leave blank for auto)",
			/** @param {string} ans */
			validate(ans) {
				if (!ans) return true;
				const ver = ans.split(".");
				if (ver.length < 2 || ver.length > 3)
					return "Invalid version format.";
				if (ver.length === 3) ver.pop();
				if (supportedVersions.includes(ver.join("."))) return true;
				else return "Unsupported version.";
			},
		},
		{
			type: "input",
			name: "username",
			default: "Tranium",
			message: "Username or e-mail",
			/** @param {string} ans */
			validate(ans) {
				if (ans.match(/^[a-zA-Z0-9_]{3,16}$/)) return true;
				else if (
					ans.match(
						/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
					)
				)
					return true;
				else return "Invalid name/email.";
			},
		},
		{
			type: "password",
			name: "password",
			message: "Password (leave blank if online-mode=false)",
			/** @param {string} ans */
			validate(ans) {
				return true;
			},
		},
	]);
	await fs.writeFile(
		"config.json",
		prettier.format(JSON.stringify(q), { parser: "json-stringify" }) // it uses prettier because that was requested for my old bot project
	);
	return (
		"Configuration done. Don't forget to backup your ".green +
		"config.json" +
		" and ".green +
		"data.sqlite" +
		" files to prevent data loss. ".green
	);
}
main().then(console.log).catch(console.error);
