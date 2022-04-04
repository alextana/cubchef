<script>
	import { onMount } from 'svelte';
	import Container from '$lib/components/ui/container/Container.svelte';
	import InputText from '$lib/components/ui/forms/InputText.svelte';
	import Button from '$lib/components/ui/button/Button.svelte';
	import Breakfast from '$lib/components/assets/register/Breakfast.svelte';

	let password = null;
	let email = null;
	let username = null;

	async function register(username, email, password) {
		if (!username || !email || !password) {
			return;
		}

		const res = await fetch('http://localhost:5001/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: username,
				email,
				password
			})
		});

		if (res.ok) {
			const user = await res.json();
			return user;
		} else {
			throw new Error('Something went wrong');
		}
	}

	async function getUsers() {
		const res = await fetch('http://localhost:5001/users');
		const users = await res.json();

		if (res.ok) {
			return users;
		} else {
			throw new Error('Something went wrong');
		}
	}

	onMount(async () => {
		getUsers();
	});
</script>

<Container extraClass="my-8">
	<h1 class="text-5xl text-gray-800 tracking-tighter font-extrabold mb-4">Register</h1>
	<div
		class="-mt-2 register bg-white p-6 drop-shadow-[0_35px_15px_rgba(0,0,0,0.10)] rounded-3xl flex items-center justify-between"
	>
		<div class="form w-full">
			<InputText bind:value={username} label="username" />
			<InputText bind:value={email} label="email" />
			<InputText bind:value={password} label="password" />
			<div class="submit-button">
				<Button on:click={() => register(username, email, password)} type="primary">Submit</Button>
			</div>
		</div>
		<div class="image w-full">
			<Breakfast />
		</div>
	</div>
</Container>
