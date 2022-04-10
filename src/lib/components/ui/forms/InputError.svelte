<script>
	import { fly } from 'svelte/transition';
</script>

<div transition:fly|local={{ duration: 300, y: 30 }} class="text-red-500 text-sm mb-4 -mt-2">
	<slot />
</div>
