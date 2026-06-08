<script lang="ts">
    import type { Snippet } from 'svelte';

    interface Props {
        title: string;
        subtitle: string;
        children: Snippet;
    }

    const { title, subtitle, children }: Props = $props();
</script>

<div class="flex min-h-screen items-center justify-center bg-surface px-4">
    <div class="w-full max-w-md rounded-xl border border-stroke bg-surface-subtle p-8">

        <div class="mb-7 text-lg font-medium text-ink">
            Biz<span class="text-accent">picker</span>
        </div>

        <h2 class="text-xl font-bold leading-tight text-ink">{title}</h2>
        <p class="mb-7 mt-1 text-sm text-ink-muted">{subtitle}</p>

        {@render children()}
    </div>
</div>