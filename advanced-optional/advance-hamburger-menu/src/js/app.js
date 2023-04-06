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
 *
 * @param {*} event
 *
 * 1. preventDefault: prevents the default action of an event from occurring.
 * For example, when a user clicks on a link, the default action is for the
 * browser to navigate to the URL specified in the link's href attribute.
 *
 * 2. stopPropagation: stops the event propagated to its ancestors
 * By default, When an event occurs on an element, it will bubble up through
 * its ancestors until it reaches the root of the DOM tree.
 * So, sometime, we need this method
 */
function disableScroll(event) {
  event.preventDefault();
  event.stopPropagation();
}

/**
 *
 * @param {*} event
 */
function clickScreenToCloseSideNav(event) {
  event.stopPropagation();
  document.body.classList.remove("nav-open");
  actionAfterClickNavToggle(false);
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

    document.body.addEventListener("scroll", disableScroll, false);
    document.body.style.overflow = "hidden";

    overlay.style.display = "block";
    //close side menu when document is clicked
    overlay.addEventListener("click", clickScreenToCloseSideNav, false);
  } else {
    document.querySelector(".nav-list").style.transition = "none";
    document.body.removeEventListener("scroll", disableScroll, false);
    document.body.style.overflow = "auto";
    overlay.style.display = "none";
  }
}
