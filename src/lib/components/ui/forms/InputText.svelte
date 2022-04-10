<script>
	export let value = null;
	export let label = '';
	export let widthClass = 'w-full';
</script>

{#if label !== ''}
	<label for="cubchef-input" class="block mb-2 ml-2 text-xs uppercase font-semibold text-gray-700">
		{label.charAt(0).toUpperCase() + label.slice(1)}
	</label>
{/if}

<input
	type="text"
	class="{widthClass} block px-4 py-4 rounded-2xl border border-gray-200 mb-4 text-sm"
	bind:value
/>
