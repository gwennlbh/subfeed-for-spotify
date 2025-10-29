<script lang="ts">
	import { onMount } from "svelte"

	export let message: string = ""
	export let visible: boolean = false
	export let title: string = "Subfeed for Spotify"

	let permissionGranted = false

	onMount(async () => {
		// Check if the browser supports notifications
		if (!("Notification" in window)) {
			console.warn("This browser does not support desktop notifications")
			return
		}

		// Request permission if not already granted
		if (Notification.permission === "granted") {
			permissionGranted = true
		} else if (Notification.permission !== "denied") {
			const permission = await Notification.requestPermission()
			permissionGranted = permission === "granted"
		}
	})

	$: if (visible && message && permissionGranted) {
		// Show system notification
		new Notification(title, {
			body: message,
			icon: "/favicon.png",
		})
		// Reset visible state
		visible = false
	}
</script>
