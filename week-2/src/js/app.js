/*
`DOMContentLoaded` event fires when the browser has finished parsing the HTML
and has constructed the DOM tree for the page, but before all of the external
resources (such as images and scripts) have finished downloading and executing. 
*/
document.addEventListener("DOMContentLoaded", () => {
  const banner = document.querySelector(".banner");
  banner.addEventListener("click", () => {
    const headline = document.querySelector(".headline");
    headline.textContent = "Have a Good Time!";
  });
  // action for click the .toggle
  const navToggle = document.querySelector(".nav-toggle");
  navToggle.addEventListener(
    "click",
    () => {
      let navStatus = toggleMenuMode();
      actionAfterClickNavToggle(navStatus);
    },
    false,
  );
  // action for click the button
  const submitButton = document.querySelector(".submit-button");
  submitButton.addEventListener("click", () => {
    // add class='nav-open' in the body element
    document.querySelector(".box-container-2").style.display = "flex";
  });
});

/**
 * @returns {boolean}: document.body whether have class="nav-open"
 */
function toggleMenuMode() {
  // add class='nav-open' in the body element if it did exist, otherwise remove it
  document.body.classList.toggle("nav-open");
  return document.body.classList.contains("nav-open");
}

/**
 * It indicates whether the side navigator is open or closed
 * @param {boolean} trigger
 *
 */
function actionAfterClickNavToggle(trigger) {
  if (trigger) {
    document.querySelector(".nav-list").style.transition =
      "transform 300ms cubic-bezier(.5, 0, .5, 1)";
    const hamburger = document.querySelector(".hamburger");
    hamburger.style.position = "fixed";
    hamburger.style.right = 0;
  } else {
    document.querySelector(".nav-list").style.transition = "none";
    const hamburger = document.querySelector(".hamburger");
    hamburger.style.position = "relative";
    hamburger.style.right = "auto";
  }
}
