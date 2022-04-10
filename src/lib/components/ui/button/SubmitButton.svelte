<script>
	export let type = '';
	let classToUse = '';

	switch (type) {
		case 'primary':
			classToUse = 'bg-blue-500 mb-4 w-max hover:bg-blue-700 text-white py-2 px-6 rounded-xl';
			break;
		case 'secondary':
			classToUse = 'bg-gray-500 mb-4 w-max hover:bg-gray-700 text-white py-2 px-6 rounded-xl';
		default:
			classToUse = 'bg-gray-500 mb-4 w-max hover:bg-gray-700 text-white py-2 px-6 rounded-xl';
			break;
	}
</script>

<button on:click type="submit" class="{classToUse} cursor-pointer" on:click>
	<slot />
</button>
