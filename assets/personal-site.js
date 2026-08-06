document.addEventListener("DOMContentLoaded", function () {
  var navToggle = document.querySelector(".nav-toggle");
  var navMenu = document.querySelector(".nav-menu");
  var navLinks = document.querySelectorAll(".nav-menu a");
  var filterButtons = document.querySelectorAll(".filter-pill");
  var projectCards = document.querySelectorAll(".project-card");
  var abstractButtons = document.querySelectorAll(".abstract-toggle");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", function () {
      var open = navMenu.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        navMenu.classList.remove("is-open");
        navToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  function setFilter(filter) {
    projectCards.forEach(function (card) {
      var tags = (card.getAttribute("data-tags") || "").split(/\s+/);
      var visible = filter === "*" || tags.indexOf(filter) !== -1;
      card.classList.toggle("hidden", !visible);
    });

    filterButtons.forEach(function (button) {
      var active = button.getAttribute("data-filter") === filter;
      button.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  filterButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      setFilter(button.getAttribute("data-filter"));
    });
  });

  setFilter("Featured");

  abstractButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var targetId = button.getAttribute("data-target");
      var panel = document.getElementById(targetId);

      if (!panel) {
        return;
      }

      var isHidden = panel.hasAttribute("hidden");
      panel.toggleAttribute("hidden");
      button.textContent = isHidden ? "Hide" : "ABS";
    });
  });
});
