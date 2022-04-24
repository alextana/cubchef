<script>
	import { createEventDispatcher } from 'svelte';
	import { fly } from 'svelte/transition';

	const dispatch = createEventDispatcher();

	export let value = '';
	export let placeholder = '';
	let tags = [];

	async function handleSearch() {
		dispatch('search');
	}

	function handleTags() {
		tags = value.split(' ');
	}

	function handleEnterKey(e) {
		if (e.key === 'Enter') {
			handleSearch();
		}
	}
</script>

<div class="input-form transition-all group w-full relative text-gray-500">
	<input
		type="text"
		{placeholder}
		on:keyup={(e) => handleEnterKey(e)}
		on:keyup={handleTags}
		class="appearance-none transition-all rounded-full bg-white shadow-2xl pl-4 pr-10 py-4 w-full"
		bind:value
	/>
	<div
		on:click={handleSearch}
		class="cursor-pointer bg-white hover:bg-blue-400 hover:text-white p-3 rounded-full icon absolute right-1 transform -translate-y-1/2 top-1/2"
	>
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-6 w-6"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
			stroke-width="2"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
			/>
		</svg>
	</div>
</div>

{#if tags.length && tags[0] !== ''}
	<div class="block  mt-6 mb-2 font-semibold text-gray-700">
		Looking for recipes containing these ingredients:
	</div>
{/if}

<div class="flex gap-1 mb-4 z-40">
	{#each tags as tag}
		{#if tag !== ''}
			<div
				transition:fly={{ duration: 300, x: 50 }}
				class="bg-gray-100 border border-gray-300 rounded-md px-3 py-1 text-xs uppercase font-semibold"
			>
				{tag}
			</div>
		{/if}
	{/each}
</div>
