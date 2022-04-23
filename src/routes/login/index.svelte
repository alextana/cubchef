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
	import { fade } from 'svelte/transition';
	import Container from '$lib/components/ui/container/Container.svelte';
	import Kitchen from '$lib/components/assets/login/Kitchen.svelte';
	import Button from '$lib/components/ui/button/Button.svelte';
	import InputText from '$lib/components/ui/forms/InputText.svelte';
	import InputError from '$lib/components/ui/forms/InputError.svelte';
	import * as Yup from 'yup';
	import { extractErrors } from '$lib/components/utils/extractErrors.js';
	import { goto } from '$app/navigation';
	import { session } from '$app/stores';

	// export let session;
	let key = 0;
	// button states
	let buttonLoading = false;
	let buttonError = false;
	let buttonDone = false;

	let errorMessage = null;

	$: if (errorMessage) {
		setTimeout(() => {
			errorMessage = null;
		}, 5000);
	}

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
		buttonLoading = true;
		if (!email || !password) {
			buttonError = true;
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
			session.set({
				authenticated: true,
				email: user.email
			});
			buttonDone = true;
			setTimeout(() => {
				goto('/');
			}, 1500);
		} else {
			if (res.status === 401) {
				buttonError = true;
				errorMessage =
					'Your account has not been verified, please click on the link in the email we sent you to activate your account';
			}
			throw new Error('Something went wrong');
		}
	}

	async function handleSubmit() {
		key = Math.random() * 10000;
		buttonLoading = true;
		errors = {};
		try {
			await schema.validate(values, { abortEarly: false });
		} catch (error) {
			buttonError = true;
			errors = extractErrors(error);
		}

		if (Object.keys(errors).length > 0) {
			return;
		}

		try {
			login(values.email, values.password);
		} catch (error) {
			console.error(error);
		}
	}
</script>

<Container extraClass="my-8 bg-gray-100 p-6 rounded-xl">
	<div class="grid bg-white w-max mx-auto p-6 rounded-2xl shadow-2xl grid-cols-1 lg:grid-cols-2">
		<div class="forms w-96">
			<h1 class="text-5xl text-gray-700 tracking-tighter font-extrabold mb-8">Welcome back</h1>
			<form on:submit|preventDefault={handleSubmit}>
				<InputText bind:value={values.email} label="email" />
				{#if errors.email}
					<InputError>{errors.email}</InputError>
				{/if}
				<InputText type="password" bind:value={values.password} label="password" />
				{#if errors.password}
					<InputError>{errors.password}</InputError>
				{/if}

				{#if errorMessage}
					<div
						transition:fade={{ duration: 300 }}
						class="error bg-red-100 border text-sm border-red-300 rounded-lg text-red-600 p-3 w-max mb-4"
					>
						{errorMessage}
					</div>
				{/if}

				<div class="submit-button">
					{#key key}
						<Button
							loading={buttonLoading}
							error={buttonError}
							done={buttonDone}
							class="bg-blue-500 mb-4 w-max hover:bg-blue-700 text-white py-2 px-6 rounded-xl"
							type="submit">Submit</Button
						>
					{/key}
				</div>
			</form>
		</div>
		<div class="login-art">
			<Kitchen />
		</div>
	</div>
</Container>
