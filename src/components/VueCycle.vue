<template>
	<div>
		<h1>{{ text }}</h1>
		<div>Test clicked {{ count }}</div>
		<button @mouseenter="Hover(),d()">Наведи мышь</button>
		<br />
		
	</div>
</template>

<script>
export default {
	name: 'Test',
	data() {
		return {
			text: 'Main Title',
			count: 0,
			loadingStatus: " ",
			actualText: " ",
			a:1,

		};
	},

	methods: {
		Hover() {
			return (this.count+=1);
			
			
		},
		d(){
		console.log("Убери мышь");
	}
	},
	beforeCreate() {
		this.loadingStatus="beforeCreate"
		console.log(this.loadingStatus);
	},
	created() {
		this.loadingStatus="created"
		console.log(this.loadingStatus);
	},
	beforeMount() {
		this.loadingStatus="beforeMount"
		console.log(this.loadingStatus);
	},
	mounted() {
		this.loadingStatus="mounted"
		console.log(this.loadingStatus);
	},
	beforeUpdate() {
		this.loadingStatus="beforeUpdate"
		console.log(this.loadingStatus);
	},
	updated() {
		this.loadingStatus="updated"
		console.log(this.loadingStatus);
	},
	beforeDestroy() {
		this.loadingStatus="beforeDestroy"
		console.log(this.loadingStatus);
	},
	destroyed() {
		this.loadingStatus="destroyed"
		console.log(this.loadingStatus);
	},
	
};


</script>