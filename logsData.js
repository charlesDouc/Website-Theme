
// Gets the id of the google spreadsheat
var spreadsheetId = "1UiQ5r59PSX1q9ylTstH5EFEu0fEHWTSkqsVHBmB_uVI",
	url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetId + "/od6/public/basic?alt=json";

$.get({
	url: url,
	success: function(response) {
		console.log(response);
		console.log("Worked");
	}
});
