<template>
	<div>
		<multiselect v-model="selected" :options="options"></multiselect>
		<pre class="language-json"><code>{{ selected | card }}</code></pre>
		<!--<b-form @submit="onSubmit" @reset="onReset" v-if="show">
			<b-row>
				<b-col>
					<b-form-group id="cardName" label="Card Name:" label-for="cardName">
						<b-form-input type="text" v-model="form.cardName" required placeholder="Enter Card Name">
						</b-form-input>
					</b-form-group>
				</b-col>
				<b-col>
					<b-form-group id="exampleInputGroup2"
								  label="Your Name:"
								  label-for="exampleInput2">
						<b-form-input id="exampleInput2"
									  type="text"
									  v-model="form.name"
									  required
									  placeholder="Enter name">
						</b-form-input>
					</b-form-group>
				</b-col>
			</b-row>

			<pre>
				{{form.cardName | card}}
			</pre>
			<b-button type="submit" variant="primary">Submit</b-button>
			<b-button type="reset" variant="danger">Reset</b-button>
		</b-form>-->
	</div>
</template>
<script>
import {API} from '@/api-common'
export default {
  name: 'AllCards',
  data () {
	return {
	  form: {
		cardName: '',
		name: '',
		food: null,
		checked: []
	  },
	  selected: '',
	  options: this.$options.filters.cardTitles(),
	  show: true
    }
  },
  methods: {
    getImageUrl (card) {
	  return 'http://www.mtgpics.com/pics/reg/' + card.expansion + '/' + card.collector_number + '.jpg'
	}
  },
  mounted () {
	let self = this
	API.get('card/')
	.then(response => {
	  self.items = response.data
	 })
  }
}
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
<style>
</style>	