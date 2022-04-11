<script context="module">
	export async function load({ session }) {
		console.log('sesh', session);
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
	import { recipes } from '$lib/stores/recipes';
	import { scale } from 'svelte/transition';
	import { goto } from '$app/navigation';

	$: console.log($recipes);

	let isLoggedIn = false;

	function setImageError(e) {
		e.target.src = 'https://via.placeholder.com/150';
	}
</script>

<Container>
	{#if !isLoggedIn}
		<div class="home-intro my-8">not logged in</div>
	{:else}
		<div class="my-16 heading text-6xl font-extrabold tracking-tighter text-gray-800">
			what should you cook <span class="text-blue-400">today</span>?
		</div>
		<div
			class="cursor-pointer recipes auto-rows-max my-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
		>
			{#each $recipes || [] as recipe, i}
				{#if recipe}
					<div
						on:click={() => goto(`/recipes/${recipe.id}`)}
						in:scale={{ duration: 250, delay: 30 * i }}
						class="recipe-card group h-full relative mb-2"
					>
						{#if recipe.vegan}
							<div
								class="absolute bg-green-600 border-2 border-white z-20 text-white text-xs uppercase px-4 py-1 rounded-full font-semibold tracking-tighter -right-2 -top-2"
							>
								vegan
							</div>
						{:else if recipe.vegetarian}
							<div
								class="absolute bg-green-600 border-2 border-white z-20 text-white text-xs uppercase px-4 py-1 rounded-full font-semibold tracking-tighter -right-2 -top-2"
							>
								vegetarian
							</div>
						{/if}
						<div class="recipe-image z-0 rounded-2xl overflow-hidden relative w-full h-64">
							{#if !recipe.image}
								<img src="https://via.placeholder.com/150" alt={recipe.title} />
							{:else}
								<img
									on:error={setImageError}
									class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full min-w-full"
									src={recipe.image}
									alt={recipe.title}
								/>
							{/if}
						</div>
						<div
							class="recipe-content group-hover:bg-blue-50 bg-white p-6 shadow-2xl rounded-xl mt-2"
						>
							<div class="recipe-title">
								<h3 class="text-2xl mb-4 font-bold tracking-tighter text-gray-700">
									{recipe.title}
								</h3>
							</div>
							<div class="recipe-summary text-gray-600">
								<p>{@html recipe?.summary?.split('.')[0] + '.'}</p>
							</div>
							{#if recipe?.readyInMinutes}
								<div class="dish-time mt-4">
									<span class="font-semibold text-blue-500">Ready in: </span>
									{recipe?.readyInMinutes} minutes
								</div>
							{/if}
						</div>
					</div>
				{/if}
			{/each}
		</div>
	{/if}
</Container>
