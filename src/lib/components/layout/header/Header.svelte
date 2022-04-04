<script>
	import Container from '$lib/components/ui/container/Container.svelte';
	import Logo from './Logo.svelte';
	import Button from '$lib/components/ui/button/Button.svelte';
	import { goto } from '$app/navigation';
</script>

<div class="bg-white border-b border-gray-200">
	<Container extraClass="bg-white flex justify-between items-center py-4 w-full gap-3">
		<Logo
			on:click={() => goto('/')}
			widthClass="w-16"
			heightClass="h-16"
			backgroundColor="#6AD5ED"
		/>
		<div class="flex gap-3 items-center">
			<Button on:click={() => goto('/login')} extraClass="mb-0" type="primary">Login</Button>
			<Button on:click={() => goto('/register')} extraClass="mb-0" type="secondary">Register</Button
			>
		</div>
	</Container>
</div>
