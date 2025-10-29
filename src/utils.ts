export function intersection<T>(array1: T[], array2: T[]): T[] {
	return array1.filter(el1 => array2.includes(el1))
}

let notificationPermissionRequested = false

export async function showNotification(
	message: string,
	title: string = "Subfeed for Spotify"
): Promise<void> {
	// Check if the browser supports notifications
	if (!("Notification" in window)) {
		console.warn("This browser does not support desktop notifications")
		return
	}

	// Request permission if not already requested
	if (!notificationPermissionRequested) {
		if (Notification.permission === "default") {
			await Notification.requestPermission()
		}
		notificationPermissionRequested = true
	}

	// Show notification if permission is granted
	if (Notification.permission === "granted") {
		new Notification(title, {
			body: message,
			icon: "/favicon.png",
		})
	}
}
