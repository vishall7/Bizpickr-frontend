<script lang="ts">
    import { goto } from '$app/navigation';

    interface RoleOption {
        label: string;
        description: string;
        goto: string;
    }

    const roles: Record<string, RoleOption> = {
        customer: {
            label: 'Customer',
            description: 'Submit Requirements and get connected with vendors.',
            goto: '/register/customer',
        },
        vendor: {
            label: 'Vendor',
            description: 'Purchase Leads and get connected with customers.',
            goto: '/register/vendor',
        },
    };
</script>

{#snippet roleCard(option: RoleOption)}
    <button
        type="button"
        onclick={() => goto(option.goto)}
        class="h-52 w-60 bg-surface-raised shadow-lg rounded-2xl flex flex-col justify-center items-center gap-2 cursor-pointer px-6 text-center"
    >
        <p class="text-lg font-medium text-ink">{option.label}</p>
        <p class="text-sm text-ink-muted">{option.description}</p>
    </button>
{/snippet}

<div class="h-lvh w-full flex justify-center items-center gap-10 bg-surface">
    {#each Object.values(roles) as option}
        {@render roleCard(option)}
    {/each}
</div>
