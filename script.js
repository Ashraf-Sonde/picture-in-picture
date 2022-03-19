const videoElement = document.querySelector("#video");
const button = document.querySelector("#button");

// Prompt user to select a media stream and pass that to video element then play
async function selectMediaStream() {
	try {
		const mediaStream = await navigator.mediaDevices.getDisplayMedia();
		videoElement.srcObject = mediaStream;
		videoElement.onloadedmetadata = () => {
			videoElement.play();
		};
	} catch (error) {
		console.log(error);
	}
}

button.addEventListener("click", async () => {
	// Disable Button
	button.disabled = true;

	// Start picture in picture
	await videoElement.requestPictureInPicture();

	// Reset the btn
	button.disabled = false;
});

// Onload
selectMediaStream();
