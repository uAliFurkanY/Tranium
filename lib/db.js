const nkv = require("nkv.db");
const fdWrapper = require("fd-wrapper");

/**
 * Like my `guild-data` package, but more 'plain'.
 * @param {Object} options Defaults
 * @param {string} table
 * @param {string} dbName
 * @returns {Function}
 */
function initializeUserData(options = {}, table = "userData", dbName = "data") {
	const db = new nkv.Database(table, dbName);
	return function user(uuid) {
		return fdWrapper({
			cache: (function () {
				if (db.has(uuid)) {
					return db.get(uuid);
				} else {
					db.set(uuid, options);
					return options;
				}
			})(),
			save() {
				db.set(uuid, this.cache);
			},
			set(key, value) {
				this.cache[key] = value;
				this.save();
			},
			get(key) {
				if (key === "save") return this.save;
				return this.cache[key];
			},
			has(key) {
				return this.cache.hasOwnProperty(key);
			},
		});
	};
}

/**
 * Just db to object, nothing special.
 * @param {string} table
 * @param {string} dbName
 * @returns {Object}
 */
function initializeData(table = "data", dbName = "data") {
	const db = new nkv.Database(table, dbName);
	return fdWrapper(db);
}

module.exports = { data: initializeData, userData: initializeUserData };
