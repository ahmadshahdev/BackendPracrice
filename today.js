module.exports.getdate = function getdate() {
	let asetString = new Date().toLocaleString("en-US", {
		timeZone: "Australia/Brisbane"
	});

	let asetDate = new Date(asetString);
	return asetDate;
};
