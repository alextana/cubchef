<script>
	import { onMount } from 'svelte';
	import Container from '$lib/components/ui/container/Container.svelte';
	import InputText from '$lib/components/ui/forms/InputText.svelte';
	import Breakfast from '$lib/components/assets/register/Breakfast.svelte';
	import { goto } from '$app/navigation';
	import Button from '$lib/components/ui/button/Button.svelte';

	let password = null;
	let email = null;
	let username = null;

	let registeredUser = null;

	// debug
	// let registeredUser = {
	// 	name: 'test',
	// 	email: 'test@test.com'
	// };

	async function register(username, email, password) {
		if (!username || !email || !password) {
			return;
		}

		const res = await fetch('/api/register', {
			method: 'POST',
			body: JSON.stringify({
				name: username,
				email,
				password
			})
		});

		if (res.ok) {
			registeredUser = await res.json();
			return registeredUser;
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
	{#if !registeredUser}
		<h1 class="text-5xl text-gray-700 tracking-tighter font-extrabold mb-8 xl:mt-32">Register</h1>
		<div class="register w-2/3 flex items-start justify-between">
			<div class="form w-full">
				<InputText bind:value={username} label="username" />
				<InputText bind:value={email} label="email" />
				<InputText bind:value={password} label="password" />
				<div class="submit-button">
					<button
						class="bg-blue-500 mb-4 w-max hover:bg-blue-700 text-white py-2 px-6 rounded-xl"
						on:click={() => register(username, email, password)}
					>
						Submit
					</button>
				</div>
			</div>
			<div class="image w-full">
				<Breakfast />
			</div>
		</div>
	{:else}
		<div class="mx-auto bg-white w-max p-16 shadow-xl rounded-2xl">
			<h1 class="flex items-center gap-3 text-6xl font-extrabold tracking-tighter mb-4">
				Thank you <span class="text-blue-400">{registeredUser.name}</span>!
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-16 w-16"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					stroke-width="2"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
					/>
				</svg>
			</h1>
			<p>
				We've sent a confirmation email to <a
					class="text-blue-500 hover:text-blue-700"
					href={`mailto:${registeredUser.email}`}>{registeredUser.email}</a
				> with an activation link
			</p>
			<p class="mb-4">
				you can click the link in the email to verify your account and you'll be ready to login.
			</p>
			<Button type="primary" on:click={() => goto('/')}>Back to home</Button>
		</div>
	{/if}
</Container>
