function initializeDropdowns() {
  document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".dropbtn");

    dropdowns.forEach(function (btn) {
      btn.onclick = function () {
        const dropdownContent = this.nextElementSibling;
        if (dropdownContent.style.display === "block") {
          dropdownContent.style.display = "none";
        } else {
          closeAllDropdowns();
          dropdownContent.style.display = "block";
        }
      };
    });

    window.onclick = function (event) {
      if (!event.target.matches(".dropbtn")) {
        closeAllDropdowns();
      }
    };

    function closeAllDropdowns() {
      const dropdowns = document.querySelectorAll(".dropdown-content");
      dropdowns.forEach(function (dropdown) {
        dropdown.style.display = "none";
      });
    }
  });
}

initializeDropdowns();
