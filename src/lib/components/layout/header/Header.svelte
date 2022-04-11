<script>
	import { session } from '$app/stores';
	import Container from '$lib/components/ui/container/Container.svelte';
	import Logo from './Logo.svelte';
	import Button from '$lib/components/ui/button/Button.svelte';
	import { goto } from '$app/navigation';

	$: isLoggedIn = $session?.authenticated;

	const handleLogout = async () => {
		if (!$session.email) {
			return;
		}

		const res = await fetch('/api/logout', {
			method: 'POST',
			body: JSON.stringify({
				email: $session.email
			})
		});

		if (res.ok) {
			session.set({
				authenticated: false,
				email: null
			});
		} else {
			console.error('could not logout');
		}
	};
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
			{#if isLoggedIn}
				<div class="name">
					hi {$session.email}
				</div>
				<Button on:click={() => handleLogout()} extraClass="mb-0" type="primary">Logout</Button>
			{:else}
				<Button on:click={() => goto('/login')} extraClass="mb-0" type="primary">Login</Button>
				<Button on:click={() => goto('/register')} extraClass="mb-0" type="secondary"
					>Register</Button
				>
			{/if}
		</div>
	</Container>
</div>
