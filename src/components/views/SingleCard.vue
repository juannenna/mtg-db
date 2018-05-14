<template>
	<b-table striped hover :fields="fields" :items="items" id="cards">
		<template slot="image" slot-scope="data">
      		<b-img :src="getImageUrl(data.item)" fluid thumbnail left/>
    	</template>
	</b-table>
</template>
<script>
	import {API} from '@/api-common'
	const items = [
  { expansion: 'dom', collector_number: '040', amount: 4, name: 'Tu Vieja' },
  { expansion: 'dom', collector_number: '041', amount: 4, name: 'Tu Vieja2' },
  { expansion: 'dom', collector_number: '042', amount: 4, name: 'Tu Vieja3' },
  { expansion: 'dom', collector_number: '043', amount: 4, name: 'Tu Vieja4' }
]
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