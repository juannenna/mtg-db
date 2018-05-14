<template>
	<b-table striped hover :fields="fields" :items="items" id="cards" responsive :stacked="'sm'">
		<template slot="goto" slot-scope="data">
			<b-btn variant="success"><router-link :to="'/cards/' + data.item.id">Go to Card</router-link></b-btn>
		</template>
		<template slot="image" slot-scope="data">
			<b-btn :id="'img-' + data.index">image</b-btn>
			<b-popover :target="'img-' + data.index" :placement="'left'" triggers="hover focus">
				<img :src="getImageUrl(data.item)"/>
			</b-popover>
		</template>
		<template slot="expansion" slot-scope="data">
			<i :class="'ss ss-' + data.item.expansion + ' ss-' + data.item.rarity + ' ss-grad ss-3x'"/>
		</template>
	</b-table>
</template>
<script>
	import {API} from '@/api-common'
	const items = [
		{ id: 1, rarity: 'common', expansion: 'dom', collector_number: '040', amount: 4, name: 'Tu Vieja' },
		{ id: 1, rarity: 'rare', expansion: 'kld', collector_number: '041', amount: 4, name: 'Tu Vieja2' },
		{ id: 1, rarity: 'uncommon', expansion: 'dom', collector_number: '042', amount: 4, name: 'Tu Vieja3' },
		{ id: 1, rarity: 'mythic', expansion: 'dom', collector_number: '043', amount: 4, name: 'Tu Vieja4' }
	]
	const fields = [
		'goto',
		{
			key: 'image',
			label: 'Artwork'
		},{
			key: 'name',
			label: 'Name'
		},{
			key: 'expansion',
			label: 'Expansion'
		}, {
			key: 'collector_number',
			label: '#'
		}, {
			key: 'amount',
			label: 'QTY'
		}]
	export default {
		name: 'AllCards',
		data () {
			return {
				items: items,
				fields: fields
			}
		},
		methods: {
			getImageUrl (card) {
				return 'http://www.mtgpics.com/pics/reg/' + card.expansion + '/' + card.collector_number + '.jpg'
			}
		},
		mount () {
			let self = this
			API.get('Card')
				.then(response => {
					self.items = response.data
				})
		}
	}
</script>
<style>
</style>	