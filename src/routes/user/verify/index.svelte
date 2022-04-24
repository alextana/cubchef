<script>
	import { page } from '$app/stores';
	import { browser } from '$app/env';
	import { goto } from '$app/navigation';
	import Container from '$lib/components/ui/container/Container.svelte';
	const code = $page.url.searchParams.get('code');

	let user = null;
	let classToUse = '';
	let status = {
		message: 'We are verifying your account...',
		status: 'loading'
	};

	$: if (status) {
		checkClass();
	}

	if (browser) {
		const verifyUser = async () => {
			status = {
				message: '',
				status: ''
			};

			const res = await fetch(`/api/user/verify?code=${code}`);

			if (res.status === 401) {
				status.message = 'Invalid verification code or user already verified';
				status.status = 'error';
			}

			user = await res.json();

			if (!user) {
				status.message = 'We could not verify user';
				status.status = 'error';
				return;
			}

			status.message = 'Your account has been verified, redirecting to the loading page...';
			status.status = 'success';
			setTimeout(() => {
				goto('/login');
			}, 1500);
		};

		verifyUser();
	}

	function checkClass() {
		switch (status.status) {
			case 'loading':
				classToUse = 'bg-gray-100';
				break;
			case 'success':
				classToUse = 'bg-green-100';
				break;
			case 'error':
				classToUse = 'bg-red-100';
				break;
		}
	}
</script>

<Container extraClass="my-8">
	<div class="status p-6 w-max rounded-lg mx-auto {classToUse}">
		{status.message}
		{#if status.status === 'error'}
			<div class="mx-auto mt-4">
				<p>
					If you cannot verify your account you can go to the <a
						class="text-blue-500 hover:text-blue-800"
						href="/login">Login</a
					>
					page where you can resend the email with the verification code.
				</p>
			</div>
		{/if}
	</div>
</Container>
