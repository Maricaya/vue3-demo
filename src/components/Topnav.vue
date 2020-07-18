<template>
	<div class="topnav">
		<div class="logo">
			<router-link to="/">轱辘 UI</router-link>
		</div>
		<ul class="menu">
			<li>文档</li>
			<li>捐款</li>
		</ul>
	</div>
</template>

<script>
  export default {
    name: "Topnav"
  }
</script>

<style lang="scss" scoped>
	.topnav {
		background: pink;
		display: flex;
		padding: 16px;

		> .logo {
			max-width: 6em;
			margin-right: auto;
		}

		> .menu {
			display: flex;
			white-space: nowrap;
			> li {
				margin: 0 1em;
			}
		}
	}
</style>
