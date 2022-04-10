<script>
	import Container from '$lib/components/ui/container/Container.svelte';
	import InputText from '$lib/components/ui/forms/InputText.svelte';
	import InputError from '$lib/components/ui/forms/InputError.svelte';
	import * as Yup from 'yup';
	import { extractErrors } from '$lib/components/utils/extractErrors.js';

	let values = {
		email: '',
		password: ''
	};

	let errors = {};

	const schema = Yup.object().shape({
		email: Yup.string().email('Invalid email').required('Email is required'),
		password: Yup.string()
			.min(3, 'Password must be at least 3 characters')
			.required('Password is required')
	});

	async function login(email, password) {
		if (!email || !password) {
			return;
		}

		const res = await fetch('/api/login', {
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
			return user;
		} else {
			console.log(await res.json());
		}
	}

	async function handleSubmit() {
		errors = {};
		try {
			await schema.validate(values, { abortEarly: false });
		} catch (error) {
			errors = extractErrors(error);
		}

		try {
			login(values.email, values.password);
		} catch (error) {
			console.error(error);
		}
	}
</script>

<Container extraClass="my-8 bg-gray-100 p-6 rounded-xl w-2/3">
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
</Container>
