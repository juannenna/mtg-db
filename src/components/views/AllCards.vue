<template>
	<div>
		<b-row>
			<b-btn variant="default" class="pull-left"><router-link to="/cards/new">+ New Card</router-link></b-btn>
		</b-row>
		<br/>
		<b-pagination size="md" :total-rows="totalItems" v-model="currentPage" :per-page="10" @change="paginate($event)">
		</b-pagination>
		<b-form-input v-model="cardName" type="text" placeholder="Search for a Card"></b-form-input>
		<br>
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
				<template slot="remove" slot-scope="data">
					<b-btn @click="deleteCard(data.item.id)" variant="danger">Delete All</b-btn>
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
  }, {
	key: 'remove',
	label: 'Delete'
  }]
export default {
  name: 'AllCards',
  data () {
	return {
	  items: [],
	  fields: fields,
	  currentPage: 1,
	  totalItems: 0,
	  cardName: ''
	}
  },
  methods: {
	getImageUrl (card) {
	  return 'http://gatherer.wizards.com/Handlers/Image.ashx?multiverseid='+ card.multiverseid +'&type=card'
	},
	deleteCard (id) {
	  API.delete('/card' + data.item.id)
		.then(response => {
		  console.log(response)
		})
	},
	paginate (event) {
	  let self = this
	  API.get('dbCards?page=' + event)
		.then(response => {
		  self.items = response.data.docs
		})
	},
	filter () {
	  let self = this
	  API.get('dbCards?cardName=' + cardName)
		.then(response => {
			self.items = response.data.docs
		})
	}
  },
  mounted () {
    let self = this
    API.get('dbCards')
	  .then(response => {
	    self.totalItems = response.data.total
	    self.items = response.data.docs
	  })
  }
}
//sls offline start --skipCacheInvalidation --noTimeout
</script>
<style>
</style>	