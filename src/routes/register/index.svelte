<script>
	import { browser } from '$app/env';
	import { onMount } from 'svelte';
	import Container from '$lib/components/ui/container/Container.svelte';
	import InputText from '$lib/components/ui/forms/InputText.svelte';
	import { goto } from '$app/navigation';
	import Button from '$lib/components/ui/button/Button.svelte';
	import InputError from '$lib/components/ui/forms/InputError.svelte';
	import { extractErrors } from '$lib/components/utils/extractErrors.js';

	import * as Yup from 'yup';

	let values = {
		username: '',
		email: '',
		password: '',
		confirmPassword: ''
	};

	let key = null;

	let errors = {};

	const schema = Yup.object().shape({
		email: Yup.string().email('Invalid email').required('Email is required'),
		password: Yup.string()
			.min(3, 'Password must be at least 3 characters')
			.required('Password is required'),
		confirmPassword: Yup.string()
			.oneOf([Yup.ref('password'), null], 'Passwords must match')
			.required('Confirm password is required')
	});

	let randomRecipe = null;

	// button state
	let buttonLoading = false;
	let buttonError = false;
	let buttonDone = false;

	let registeredUser = null;

	async function register(username, email, password) {
		key = Math.floor(Math.random() * 1000000);
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

		const res = await fetch('/api/register', {
			method: 'POST',
			body: JSON.stringify({
				name: username,
				email,
				password
			})
		});

		if (res.ok) {
			buttonDone = true;
			registeredUser = await res.json();
			return registeredUser;
		} else {
			buttonError = true;
			throw new Error('Something went wrong');
		}
	}

	async function getRecipe() {
		try {
			const res = await fetch('/api/recipes?take=1');
			randomRecipe = await res.json();
			randomRecipe = randomRecipe[0];
		} catch (error) {
			console.error(error);
		}
	}

	onMount(async () => {
		if (browser) {
			getRecipe();
		}
	});
</script>

<Container extraClass="my-8">
	{#if !registeredUser}
		<div class="register w-full flex gap-6 items-center justify-center xl:mt-32">
			<div class="form flex-initial w-96">
				<h1 class="text-5xl text-gray-700 tracking-tighter font-extrabold mb-8">Register</h1>
				<InputText bind:value={values.username} label="username" />
				<InputText bind:value={values.email} label="email" />
				{#if errors.email}
					<InputError>{errors.email}</InputError>
				{/if}
				<InputText type="password" bind:value={values.password} label="password" />
				{#if errors.password}
					<InputError>{errors.password}</InputError>
				{/if}
				<InputText type="password" bind:value={values.confirmPassword} label="Confirm Password" />
				{#if errors.confirmPassword}
					<InputError>{errors.confirmPassword}</InputError>
				{/if}
				<div class="submit-button">
					{#key key}
						<Button
							loading={buttonLoading}
							error={buttonError}
							done={buttonDone}
							on:click={() => register(values.username, values.email, values.password)}
							>Submit</Button
						>
					{/key}
				</div>
			</div>
			<div class="image w-max rounded-3xl overflow-hidden h-full bg-blue-200">
				{#if randomRecipe}
					<img src={randomRecipe.image} alt={randomRecipe.name} />
				{/if}
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
