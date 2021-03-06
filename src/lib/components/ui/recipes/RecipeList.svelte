<script>
	import { scale } from 'svelte/transition';
	import { goto } from '$app/navigation';
	import { recipes } from '$lib/stores/recipes';

	function setImageError(e) {
		e.target.src = 'https://via.placeholder.com/150';
	}
</script>

<div
	class="cursor-pointer recipes auto-rows-max my-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
>
	{#if $recipes?.length}
		{#each $recipes || [] as recipe, i}
			{#if recipe}
				<div
					on:click={() => goto(`/recipes/${recipe.recipe_id}`)}
					in:scale={{ duration: 250, delay: 30 * i }}
					class="recipe-card group h-full relative mb-2"
				>
					{#if recipe.vegan}
						<div
							class="absolute bg-green-600 border-2 border-white z-20 text-white text-xs uppercase px-4 py-1 rounded-full font-semibold tracking-tighter -right-2 -top-2"
						>
							vegan
						</div>
					{:else if recipe.diet}
						<div
							class="absolute bg-green-600 border-2 border-white z-20 text-white text-xs uppercase px-4 py-1 rounded-full font-semibold tracking-tighter -right-2 -top-2"
						>
							{#if recipe.diet.toLowerCase().indexOf('vegetarian')}
								Vegetarian
							{:else if recipe.diet.toLowerCase().indexOf('vegan')}
								Vegan
							{/if}
						</div>
					{/if}
					<div class="recipe-image z-0 rounded-2xl overflow-hidden relative w-full h-64">
						<div class="recipe-title absolute left-4 bottom-0 z-50">
							<h3 class="text-2xl mb-4 font-bold tracking-tighter text-white">
								{recipe.name}
							</h3>
						</div>
						<div class="recipe-title__shadow z-40 absolute bottom-0 w-full h-full" />
						{#if !recipe.image}
							<img src="https://via.placeholder.com/150" alt={recipe.name} />
						{:else}
							<img
								on:error={setImageError}
								class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full min-w-full"
								src={recipe.image}
								alt={recipe.name}
							/>
						{/if}
					</div>
					<div
						class="recipe-content group-hover:bg-blue-50 bg-white p-6 shadow-2xl rounded-xl mt-2"
					>
						<div class="recipe-summary text-gray-600">
							<p class="text-lg text-gray-500 font-semibold">{recipe.dish_type}</p>
							{#if recipe.servings}
								<p>{recipe.servings}</p>
							{/if}
						</div>
						{#if recipe.preparation_time && recipe.cooking_time}
							<div class="dish-time mt-4 flex justify-start items-center gap-2 text-gray-600">
								<div>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-6 w-6 text-gray-600"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="2"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
								</div>
								<div class="flex-auto text-sm border-l pl-3 border-l-gray-200">
									<p>
										<span class="font-bold">Prep:</span>
										{recipe.preparation_time}
									</p>
									<p>
										<span class="font-bold">Cooking:</span>{recipe.cooking_time}
									</p>
								</div>
							</div>
						{/if}
					</div>
				</div>
			{/if}
		{/each}
	{:else if !$recipes}
		no recipes
	{:else}
		{#each Array(20).fill({}) as loadingSkeleton}
			<div class="recipe-card group h-full bg-transparent relative mb-2">
				<div class="recipe-image skeleton z-0 rounded-2xl overflow-hidden relative w-full h-64" />
				<div class="recipe-content mt-2 skeleton rounded-2xl h-20" />
			</div>
		{/each}
	{/if}
</div>

<style>
	.recipe-title__shadow {
		background: rgb(0, 0, 0);
		background: linear-gradient(
			0deg,
			rgba(32, 33, 42, 0.9) 0%,
			rgba(9, 9, 121, 0) 65%,
			rgba(0, 212, 255, 0) 80%
		);
	}

	.skeleton {
		display: block;
		max-width: 100%;
		animation: shine-lines 1.2s infinite linear;
		background-image: linear-gradient(90deg, #ddd 0px, #e8e8e8 80px, #ddd 80px);
		background-size: 800px;
	}
	@keyframes shine-lines {
		0% {
			background-position: -100px;
		}
		40%,
		100% {
			background-position: 650px;
		}
	}
</style>
