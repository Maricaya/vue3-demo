<template>
	<div class="home">
		<Topnav/>

		<div class="banner">
			<div class="logo"></div>
			<div class="intro">
				<h1>UI</h1>
				<h2>基于 Vue3 和 TypeScript 的 UI 框架</h2>
				<div class="links">
					<router-link to="/doc">查看文档</router-link> |
					<a href="http://github.com">GitHub</a>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
  import Topnav from '../components/Topnav.vue'

  export default {
    name: "Home",
    components: {Topnav}
  }
</script>

<style lang="scss" scoped>
.home {
	display: flex;
	flex-direction: column;
	height: 100vh;
	.intro {
		padding: 100px 0;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		background: #ccc;
	}
}
</style>
