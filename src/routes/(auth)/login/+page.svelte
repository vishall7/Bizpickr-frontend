<script lang="ts">
    import { enhance } from "$app/forms";
    import Button from "$lib/components/Button.svelte";
    import AuthCard from '$lib/components/AuthCard.svelte';
    import type { ActionData } from './$types';

    let { form }: { form: ActionData } = $props();
    let showPassword = $state(false);
</script>

<form method="POST" use:enhance>
    <AuthCard title="Welcome back" subtitle="Sign in to your account">
        <div class="flex flex-col gap-4 mb-2">
            <!-- Email -->
            <div class="flex flex-col gap-1.5">
                <label for="email" class="text-sm text-ink-muted">Email</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    value={form?.email ?? ''}
                    required
                    minlength="8"
                    placeholder="you@example.com"
                    class="w-full rounded-lg border border-stroke bg-surface-raised px-3 py-2.5 text-base text-ink outline-none placeholder:text-ink-faint focus:border-stroke-strong"
                />
            </div>

            <!-- Password -->
            <div class="flex flex-col gap-1.5">
                <label for="password" class="text-sm text-ink-muted">Password</label>
                <div class="relative">
                    <input
                        id="password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        placeholder="••••••••"
                        required
                        minlength="4"
                        class="w-full rounded-lg border border-stroke bg-surface-raised px-3 py-2.5 text-base text-ink outline-none placeholder:text-ink-faint focus:border-stroke-strong"
                    />
                    <button
                        type="button"
                        onclick={() => showPassword = !showPassword}
                        class="absolute right-3 top-1/2 -translate-y-1/2 text-ink-faint hover:text-ink cursor-pointer"
                    >
                        {#if showPassword}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
                                <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                                <line x1="1" y1="1" x2="23" y2="23"/>
                            </svg>
                        {:else}
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                                <circle cx="12" cy="12" r="3"/>
                            </svg>
                        {/if}
                    </button>
                </div>
            </div>
        </div>

        {#if form?.error}
            <p class="mb-3 text-sm text-danger">{form.error}</p>
        {/if}

        {#if form?.message}
            <p class="mb-3 text-sm text-success">{form.message}</p>
        {/if}

        <p class="mb-5 text-right text-sm">
            <a href="/forgot-password" class="text-ink-muted hover:text-ink">Forgot password?</a>
        </p>

        <Button class="w-full">Sign in</Button>

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
