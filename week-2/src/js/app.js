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
  navToggle.addEventListener("click", () => {
    // add class='nav-open' in the body element
    document.body.classList.toggle("nav-open");
  });
  // action for click the button
  const submitButton = document.querySelector(".submit-button");
  submitButton.addEventListener("click", () => {
    // add class='nav-open' in the body element
    document.querySelector(".box-container-2").style.display = "flex";
  });
});
