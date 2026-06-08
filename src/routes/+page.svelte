<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import { goto } from '$app/navigation';

	function handleClick(){
		goto("/login")
	}
</script>

<!-- html -->
<div class="flex h-screen items-center justify-center bg-surface">
	<div class="flex flex-col items-center justify-center gap-4 text-ink">
		<h1 class="text-4xl font-bold leading-tight text-center">
			Find developers who <span class="text-accent">actually</span> ship
		</h1>
		<p class="text-lg text-ink-muted max-w-3xl mx-auto text-center leading-normal">
			Connect with software developers who match your project needs. Post once, get matched with the
			right builders.
		</p>

		<Button onclick={handleClick} class="mt-1">Get Started</Button>
	</div>
</div>
