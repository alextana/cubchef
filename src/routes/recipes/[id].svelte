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
		<div class="recipe">
			<div class="recipe__name">
				<h1 class="text-6xl font-extrabold tracking-tighter mb-4 text-gray-700">
					{recipe?.name}
				</h1>
			</div>
			{#if recipe.image}
				<img src={recipe.image} alt={recipe.name} class="mb-4" />
			{/if}
			{#if recipe.ingredients}
				<div class="recipe__ingredients">
					{@html recipe.ingredients}
				</div>
			{/if}
			{#if recipe.instructions}
				<div class="recipe__instructions">
					{@html recipe.instructions}
				</div>
			{/if}
		</div>
	{/if}
</Container>

<style>
	:global(.recipe-method__heading) {
		font-size: 2rem;
		color: #444444;
		margin-bottom: 0.5rem;
		letter-spacing: -2px;
		font-weight: bold;
		display: block;
	}

	:global(.recipe-ingredients__heading) {
		font-size: 2rem;
		color: #444444;
		margin-bottom: 0.5rem;
		letter-spacing: -2px;
		font-weight: bold;
		display: block;
	}

	:global(.recipe-ingredients__sub-heading) {
		font-size: 1.7rem;
		color: #444444;
		margin-bottom: 0.5rem;
		letter-spacing: -2px;
		font-weight: bold;
		display: block;
	}

	:global(ol) {
		list-style: decimal !important;
		padding-left: 1.5rem !important;
	}

	:global(.recipe-method__list-item) {
		margin-bottom: 0.5rem;
	}

	:global(.recipe-ingredients__list) {
		padding-left: 1.5rem !important;
	}

	:global(.recipe-ingredients__list-item) {
		list-style-type: disc;
		margin-bottom: 0.5rem;
	}
</style>
