<script lang="ts">
    import Button from "$lib/components/Button.svelte";
    import AuthCard from '$lib/components/AuthCard.svelte';
    import FormField from '$lib/components/FormFeild.svelte';

    let email = $state('');
    let password = $state('');
    let confirmPassword = $state('');

    function handleClick(){
        console.log("button clicked", {email, password, confirmPassword })
    }
</script>

<AuthCard title="Create your account" subtitle="Find vendors best suited for your requirements">

    <div class="flex flex-col gap-4 mb-7">
        <FormField label="Email" type="email" placeholder="you@example.com" bind:value={email} />
        <FormField label="Password" type="password" placeholder="••••••••" bind:value={password} showToggle />
        <FormField label="Confirm Password" type="password" placeholder="••••••••" bind:value={confirmPassword} showToggle />
    </div>

    <Button onclick={handleClick} class="w-full">Sign up</Button>

     <div class="my-5 flex items-center gap-3">
            <hr class="flex-1 border-stroke-strong" />
            <span class="text-xs text-ink-muted">or</span>
            <hr class="flex-1 border-stroke-strong" />
        </div>

    <p class="text-center text-sm text-ink-muted">
        Already have an account?
        <a href="/login" class="hover:text-ink">Sign in</a>
    </p>

</AuthCard>
