<script lang="ts">
    import { enhance } from "$app/forms";
    import Button from "$lib/components/Button.svelte";
    import AuthCard from '$lib/components/AuthCard.svelte';
    import FormField from '$lib/components/FormFeild.svelte';
    import type { ActionData } from './$types';

    let email = $state('');
    let password = $state('');

    let { form }: { form: ActionData } = $props();

    // async function handleClick() {
    //     const res = await fetch('/api/auth/login', {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ email, password }),
    //     });

    //     if(!res.ok) {
    //         const data = await res.json();
    //         alert(data.message);
    //         return;
    //     }

    //     const data = await res.json();
    //     console.log(data); // should echo back { email, password }
    // }
</script>

<form method="POST" use:enhance>
    <AuthCard title="Welcome back" subtitle="Sign in to your account">

        <div class="flex flex-col gap-4 mb-2">
            <FormField name="email" label="Email" type="email" placeholder="you@example.com" bind:value={email} />
            <FormField name="password" label="Password" type="password" placeholder="••••••••" bind:value={password} showToggle />
        </div>

        <p class="mb-5 text-right text-sm">
            <a href="/forgot-password" class="text-ink-muted hover:text-ink">Forgot password?</a>
        </p>

        <!-- <Button onclick={handleClick} class="w-full">Sign in</Button> -->
        <Button class="w-full">Sign in</Button>

        {#if form?.message}<p>{form.message}</p>{/if}

         <div class="my-5 flex items-center gap-3">
                <hr class="flex-1 border-stroke-strong" />
                <span class="text-xs text-ink-muted">or</span>
                <hr class="flex-1 border-stroke-strong" />
            </div>

        <p class="text-center text-sm text-ink-muted">
            Don't have an account?
            <a href="/register" class="hover:text-ink">Sign up</a>
        </p>

    </AuthCard>
</form>
