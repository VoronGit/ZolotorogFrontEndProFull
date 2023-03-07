import { getUserByName, getUserInfractions } from './user-api.js';


export async function getRelevantInfractionReasons(username) {
	// Get API info
	const userG = await new Promise((resolveIns, rejectIns) => getUserByName(username, (user) => resolveIns(user), () => { rejectIns("User info not found!") }))
		.then((user) => { return user })
		.catch((error) => {
			console.error(error);
			return {};
		});
	const infG = userG.id ? await new Promise((resolveIns, rejectIns) => getUserInfractions(userG.id, (inf) => { resolveIns(inf) }, () => { rejectIns("User infractions not found!") }))
		.then((inf) => { return inf })
		.catch((error) => {
			console.error(error);
			return [];
		}) : [];

	if (infG && infG.length > 0) {
		// find most recent and worst infraction
		let foundIndexRecent = 0;
		let foundIndexWorst = 0;
		for (let i = 1; i < infG.length; i++) {
			if (infG[i].id > infG[foundIndexRecent].id) {
				foundIndexRecent = i;
			}
			if (infG[i].points > infG[foundIndexWorst].points) {
				foundIndexWorst = i;
			}
		}
		const finObj = { "mostRecent": replaceURLs(infG[foundIndexRecent].reason), "worst": replaceURLs(infG[foundIndexWorst].reason) };
		return finObj;
	} else {
		return {};
	}
}

// Universal function
function replaceURLs(data) {
	return data.replace(/\b(http)(s)?:\/\/\S+/, match => `<a href="${match}">${match}</a>`);
}