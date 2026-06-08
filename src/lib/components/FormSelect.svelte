<script lang="ts">
    interface Props {
        label: string;
        options: { value: string; label: string }[];
        value?: string;
    }

    let { label, options, value = $bindable('') }: Props = $props();
</script>

<div class="flex flex-col gap-1.5">
    <label for="select" class="text-xs text-neutral-400">{label}</label>
    <select
        bind:value
        class="w-full rounded-lg border border-neutral-800 bg-neutral-950 px-3 py-2.5 text-sm text-neutral-200 outline-none focus:border-blue-500"
    >
        <option value="" disabled>Select your country</option>
        {#each options as option}
            <option value={option.value}>{option.label}</option>
        {/each}
    </select>
</div>