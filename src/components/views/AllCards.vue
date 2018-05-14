<template>
	<div>
		<b-row>
			<b-btn variant="default" class="pull-left"><router-link to="/cards/new">+ New Card</router-link></b-btn>
		</b-row>
		<br/>
		<b-row>
			<b-table striped hover :fields="fields" :items="items" id="cards" responsive :stacked="'sm'">
				<template slot="image" slot-scope="data">
					<span :id="'img-' + data.index"><i class="far fa-file-image fa-3x"></i></span>
					<b-popover :target="'img-' + data.index" :placement="'left'" triggers="hover focus">
						<img :src="getImageUrl(data.item)"/>
					</b-popover>
				</template>
				<template slot="name" slot-scope="data">
					<span class="strong"><router-link :to="'/cards/' + data.item.id">{{data.item.name}}</router-link></span>
				</template>
				<template slot="expansion" slot-scope="data">
					<i :class="'ss ss-' + data.item.expansion + ' ss-' + data.item.rarity + ' ss-grad ss-3x'"/>
				</template>
				<template slot="cmc" slot-scope="data">
					<i :class="'ms ms-' + data.item.cmc + ' ms-cost'"/>
				</template>
				<template slot="type" slot-scope="data">
					<i :id="'type-' + data.index" v-if="data.item.type === 'Legendary Planeswalker'" class="ms ms-planeswalker ms-2x"/>
					<i :id="'type-' + data.index" v-else :class="'ms ms-' + data.item.type.toLowerCase() + ' ms-2x'"/>
					<b-tooltip :target="'type-' + data.index" :title="data.item.type"></b-tooltip>
				</template>
			</b-table>
		</b-row>
	</div>
</template>
<script>
	import {API} from '@/api-common'
	const fields = [
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
			key: 'cmc',
			label: 'CMC'
		}, {
			key: 'casting_cost',
			label: 'Casting Cost'
		}, {
			key: 'type',
			label: 'Type'
		}, {
			key: 'amount',
			label: 'QTY'
		}]
	export default {
		name: 'AllCards',
		data () {
			return {
				items: [],
				fields: fields
			}
		},
		methods: {
			getImageUrl (card) {
				return 'http://www.mtgpics.com/pics/reg/' + card.expansion + '/' + card.collector_number + '.jpg'
			}
		},
		mounted () {
			let self = this
			API.get('cards')
				.then(response => {
					self.items = response.data
				})
		}
	}
</script>
<style>
</style>	