<script context="module">
	export async function load({ session }) {
		if (!session?.authenticated) {
			return {
				status: 302
				// redirect: '/login?unauthorized=true'
			};
		}
		return {
			props: {
				email: session.email,
				name: session.name
			}
		};
	}
</script>

<script>
	import { browser } from '$app/env';
	import Container from '$lib/components/ui/container/Container.svelte';
	import RecipeList from '$lib/components/ui/recipes/RecipeList.svelte';
	import SearchBar from '$lib/components/ui/search/SearchBar.svelte';
	import { recipes } from '$lib/stores/recipes';
	import { session } from '$app/stores';
	// import { debounce } from 'debounce';

	$: isLoggedIn = $session?.authenticated;

	let searchTerm = '';

	async function handleSearch() {
		if (searchTerm === '') {
			if (browser) {
				const res = await fetch(`/api/recipes`);
				const result = await res.json();
				recipes.set(result);
			}
			return;
		}
		if (browser) {
			try {
				recipes.set([]);
				const res = await fetch(`/api/recipes/search?searchTerms=${searchTerm}`);
				const searchedRecipes = await res.json();
				if (searchedRecipes.length) {
					recipes.set(searchedRecipes);
				} else {
					recipes.set(null);
				}
			} catch (error) {
				recipes.set(null);
				console.error(error);
			}
		}
	}
</script>

<Container>
	{#if !isLoggedIn}
		<div class="home-intro my-8">not logged in</div>
	{:else}
		<div class="mt-8 heading text-5xl font-extrabold tracking-tighter text-gray-600">
			what would you like to cook today?
		</div>
		<div class="search-bar my-4">
			<SearchBar
				bind:value={searchTerm}
				placeholder="Add ingredients you have in your pantry..."
				on:search={handleSearch}
			/>
		</div>
		<RecipeList />
	{/if}
</Container>
