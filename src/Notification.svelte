<script lang="ts">
	import { fade } from "svelte/transition"

	export let message: string = ""
	export let visible: boolean = false
	export let duration: number = 3000

	let timeoutId: number

	$: if (visible) {
		clearTimeout(timeoutId)
		timeoutId = setTimeout(() => {
			visible = false
		}, duration)
	}
</script>

{#if visible}
	<div class="notification" transition:fade={{ duration: 300 }}>
		{message}
	</div>
{/if}

<style>
	.notification {
		position: fixed;
		bottom: 2rem;
		right: 2rem;
		background-color: var(--primary);
		color: #000;
		padding: 1rem 1.5rem;
		border-radius: 4px;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
		z-index: 1000;
		font-weight: 500;
		max-width: 300px;
	}
</style>
