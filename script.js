document.getElementById("animateBtn").addEventListener("click", function () {
  // Hide the button after clicking
  document.getElementById("animateBtn").style.display = "none";

  // Show the video container
  const videoContainer = document.getElementById("videoContainer");
  videoContainer.style.display = "block";
});
