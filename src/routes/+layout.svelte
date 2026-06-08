<script lang="ts">
	import '../app.css';
	import favicon from '$lib/assets/favicon.svg';
	import { theme } from '$lib/stores/theme.svelte';
	import { onMount } from 'svelte';

	let { children } = $props();

	onMount(() => {
		console.log("current theme, ", theme.dark)
		theme.init()
		console.log("theme after init, ", theme.dark)
	})
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
{@render children()}
