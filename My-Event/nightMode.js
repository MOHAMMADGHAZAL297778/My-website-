document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("darkModeToggle");
  const body = document.body;

  if (localStorage.getItem("darkMode") === "enabled") {
    body.classList.add("night-mode");
  }

  if (toggleButton) {
    toggleButton.addEventListener("click", () => {
      body.classList.toggle("night-mode");

      if (body.classList.contains("night-mode")) {
        localStorage.setItem("darkMode", "enabled");
        document.getElementById('darkModeToggle').innerText = "☀️";
      } else {
        localStorage.setItem("darkMode", "disabled");
        document.getElementById('darkModeToggle').innerText = "🌙";
      }
    });
  }
});
