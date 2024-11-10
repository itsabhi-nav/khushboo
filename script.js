document.getElementById("animateBtn").addEventListener("click", function() {
  const balloonsContainer = document.getElementById("balloons");
  balloonsContainer.innerHTML = "";

  // Generate balloons
  for (let i = 0; i < 7; i++) {
    const balloon = document.createElement("div");
    balloon.className = "balloon";
    balloonsContainer.appendChild(balloon);
  }

  // Show the balloons
  balloonsContainer.style.display = "flex";
  balloonsContainer.style.justifyContent = "center";
});
