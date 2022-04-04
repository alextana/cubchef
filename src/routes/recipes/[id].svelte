<script context="module">
	export async function load({ params }) {
		const id = params.id;
		return { props: { id } };
	}
</script>

<script>
	import { browser } from '$app/env';
	import Container from '$lib/components/ui/container/Container.svelte';

	export let id;
	let recipe = null;
	let loading = true;

	if (browser) {
		loadRecipe();
	}

	async function loadRecipe() {
		try {
			const res = await fetch(`/api/recipes/${id}`);
			recipe = await res.json();
		} catch (error) {
			console.error(error);
		}
		loading = false;
	}
</script>

<Container extraClass="my-8">
	{#if loading}
		<div class="skeleton">skeleton..</div>
	{:else if recipe}
		{recipe?.title}
	{/if}
</Container>
