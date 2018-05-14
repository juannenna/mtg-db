export function card (card) {
	let json = require('@/assets/AllCards-x.json')
	return json[card]
}