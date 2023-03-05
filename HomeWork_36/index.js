import { getUserByName, getUserInfractions } from './user-api.js';

export function getRelevantInfractionReasons(username) {
	return new Promise(function (resolve) {
		getUserByName(username, function (user) {
			getUserInfractions(user.id, function (result) {
				// find most recent infraction
				let foundIndexRecent = 0;
				for (let i = 1; i < result.length; i++) {
					if (result[i].id > result[foundIndexRecent].id) {
						foundIndexRecent = i;
					}
				}
				// find most recent infraction with most infraction points
				let foundIndexWorst = 0;
				for (let i = result.length - 1; i >= 0; i--) {
					if (result[i].points > result[foundIndexWorst].points) {
						foundIndexWorst = i;
					}
				}

				//resolve({mostRecent, worst});
				const finObj = {"mostRecent":replaceURLs(result[foundIndexRecent].reason), "worst":replaceURLs(result[foundIndexWorst].reason)};
				resolve(finObj);
			},function (error) {
				resolve("no infractions found! Error: " + error);
			})
		},function () {
			resolve("no user found! Error: " + error);
		})
	});
}

// Universal function
function replaceURLs(data) {
	return data.replace(/\b(http)(s)?:\/\/\S+/,match => '<a href="' + match + '">' + match + '</a>');
}