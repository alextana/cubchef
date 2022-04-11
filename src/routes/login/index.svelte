<script context="module">
	export async function load({ session }) {
		if (!session?.authenticated) {
			return {
				props: {
					session
				}
			};
		}
		return {
			props: {
				status: 302,
				redirect: '/'
			}
		};
	}
</script>

<script>
	import Container from '$lib/components/ui/container/Container.svelte';
	import InputText from '$lib/components/ui/forms/InputText.svelte';
	import Button from '$lib/components/ui/button/Button.svelte';
	import * as Yup from 'yup';
	import { extractErrors } from '$lib/components/utils/extractErrors.js';
	import { goto } from '$app/navigation';
	import { session } from '$app/stores';

	// export let session;
	let loggedIn = false;

	let loginMessage = null;
	let loginError = false;

	let values = {};
	let errors = {};

	const schema = Yup.object().shape({
		email: Yup.string().email('Invalid email').required('Email is required'),
		password: Yup.string()
			.min(6, 'Password must be at least 6 characters')
			.required('Password is required')
	});

	async function login(email, password) {
		if (!email || !password) {
			return;
		}

		const res = await fetch('http://localhost:5001/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				email,
				password
			})
		});

		if (res.ok) {
			const user = await res.json();
			loginError = false;
			loginMessage = 'Login successfull, redirecting...';
			return user;
		} else {
			loginMessage = 'Invalid credentials';
			loginError = true;
			throw new Error('Something went wrong');
		}
	}

	async function handleSubmit() {
		try {
			await schema.validate(values, { abortEarly: false });
		} catch (error) {
			errors = extractErrors(error);
			console.log(errors);
		}

		try {
			login(values.email, values.password);
		} catch (error) {
			console.error(error);
		}
		loggedIn = true;

		session.set({
			authenticated: true,
			email: values.email
		});

		goto('/');
	}
</script>

<<<<<<< Updated upstream
<Container extraClass="my-8 bg-gray-100 p-6 rounded-xl">
	{#if loginMessage}
		<p>{loginMessage}</p>
	{:else}
		<form on:submit|preventDefault={handleSubmit}>
			<InputText bind:value={values.email} label="email" />
			<InputText bind:value={values.password} label="password" />

			{#if loginError}
				<p>{loginError}</p>
			{/if}

			<div class="submit-button">
				<Button submit={true} type="primary">Submit</Button>
			</div>
		</form>
=======
<Container extraClass="my-8 bg-gray-100 p-6 rounded-xl w-2/3">
	{#if !loggedIn}
		<h1 class="font-extrabold mb-8 text-5xl tracking-tighter text-gray-700">Login</h1>
		<form on:submit|preventDefault={handleSubmit}>
			<InputText bind:value={values.email} label="email" />

			{#if errors.email}
				<InputError>{errors.email}</InputError>
			{/if}

			<InputText bind:value={values.password} label="password" />

			{#if errors.password}
				<InputError>{errors.password}</InputError>
			{/if}

			<div class="submit-button">
				<button
					class="bg-blue-500 mb-4 w-max hover:bg-blue-700 text-white py-2 px-6 rounded-xl"
					type="submit">Submit</button
				>
			</div>
		</form>
	{:else}
		<h1 class="text-4xl font-semibold">Logged in, redirecting...</h1>
>>>>>>> Stashed changes
	{/if}
</Container>
