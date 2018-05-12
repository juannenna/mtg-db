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
  { edition: 'dom', collector_number: '040', name: 'Tu Vieja' },
  { edition: 'dom', collector_number: '041', name: 'Tu Vieja2' },
  { edition: 'dom', collector_number: '042', name: 'Tu Vieja3' },
  { edition: 'dom', collector_number: '043', name: 'Tu Vieja4' }
]
const fields = [
	{
          key: 'image',
          label: 'image'
    },
    {
    	key: 'edition',
    	label: 'edition'
    },
    {
    	key: 'name',
    	label: 'name'
    },
]
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
			return 'http://www.mtgpics.com/pics/reg/' + card.edition + '/' + card.collector_number + '.jpg'
		}
	},
	mount () {
		let self = this
		 API.get('Card')
          .then(response => {
            self.items = response.data
          })
          .catch(error => {
                this.checkError(error)
    	  })
      }
}
</script>
<style>
</style>	