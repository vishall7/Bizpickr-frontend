<script lang="ts">
    interface Props {
        label: string;
        name: string;
        type?: 'password' | 'email' | 'text';
        placeholder?: string;
        value?: string;
        showToggle?: boolean;
    }

    let { label, name, type = 'text', placeholder = '', value = $bindable(''), showToggle = false }: Props = $props();

    let show = $state(false);

    let inputType = $derived(
        type === 'password' && showToggle
            ? show ? 'text' : 'password'
            : type
    );
</script>

<div class="flex flex-col gap-1.5">
    <label for={name} class="text-sm text-ink-muted">{label}</label>
    <div class="relative">
        <input
            type={inputType}
            name={name}
            {placeholder}
            bind:value
            class="w-full rounded-lg border border-stroke bg-surface-raised px-3 py-2.5 text-base text-ink outline-none placeholder:text-ink-faint focus:border-stroke-strong"
        />
        {#if type === 'password' && showToggle}
            <button
                type="button"
                onclick={() => show = !show}
                class="absolute right-3 top-1/2 -translate-y-1/2 text-ink-faint hover:text-ink"
            >
                {#if show}
                    <!-- eye-off -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
                        <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                        <line x1="1" y1="1" x2="23" y2="23"/>
                    </svg>
                {:else}
                    <!-- eye -->
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                        <circle cx="12" cy="12" r="3"/>
                    </svg>
                {/if}
            </button>
        {/if}
    </div>
</div>
