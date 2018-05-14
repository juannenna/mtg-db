export function card (card) {
	let json = require('@/assets/AllCards-x.json')
	return json[card]
}
export function cardTitles () {
	let json = require('@/assets/AllCards-x.json')
	let retArray = []
	for (let k in json) {
		retArray.push(json[k]['name'])
	}
	return retArray
}