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
				email: session.email
			}
		};
	}
</script>

<script>
	import Container from '$lib/components/ui/container/Container.svelte';
	import RecipeList from '$lib/components/ui/recipes/RecipeList.svelte';
	import { recipes } from '$lib/stores/recipes';

	let isLoggedIn = true;
</script>

<Container>
	{#if !isLoggedIn}
		<div class="home-intro my-8">not logged in</div>
	{:else}
		<div class="my-16 heading text-6xl font-extrabold tracking-tighter text-gray-800">
			what should you cook <span class="text-blue-400">today</span>?
		</div>
		<RecipeList recipes={$recipes} />
	{/if}
</Container>
