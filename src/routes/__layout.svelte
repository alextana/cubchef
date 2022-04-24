<script>
	import '../app.css';
	import Header from '$lib/components/layout/header/Header.svelte';
</script>

<Header />
<slot />

<style>
	:global(body) {
		background-color: #edf0f5;
	}
</style>
