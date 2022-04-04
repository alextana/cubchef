<script>
	import Container from '$lib/components/ui/container/Container.svelte';
	import InputText from '$lib/components/ui/forms/InputText.svelte';
	import Button from '$lib/components/ui/button/Button.svelte';
	import * as Yup from 'yup';
	import { extractErrors } from '$lib/components/utils/extractErrors.js';

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
	}
</script>

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
	{/if}
</Container>
