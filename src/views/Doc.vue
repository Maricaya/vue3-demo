<template>
	<div class="doc">
		<Topnav/>
		<div class="content">
			<Aside/>
			<Main/>
		</div>
	</div>
</template>

<script>
	import Topnav from '../components/Topnav.vue'
  import Aside from "../components/Doc/Aside.vue"
  import Main from "../components/Doc/Main.vue"

  export default {
    name: "Doc",
	  components: {Main, Aside, Topnav}
  }
</script>

<style lang="scss" scoped>
	.doc {
		display: flex;
		flex-direction: column;
		height: 100vh;
		.content {
			flex-grow: 1;
			display: flex;
			width: 100%;
			min-width: 1000px;
			margin: 0 auto;
		}
	}
</style>
