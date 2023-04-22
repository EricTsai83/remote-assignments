// make an AJAX call to a URL by Fetch API, and show the response data in the page.
// You may render UI with any style.

function ajax(url) {
  return fetch(url).then((data) => data.json());
  // .then((data) => JSON.stringify(data, undefined, 2));
}

function render(data) {
  let body = document.querySelector("body");
  data.forEach((element) =>
    body.insertAdjacentHTML(
      "beforeend",
      `<b>${element.name}</b><br>` +
        `${element.price}<br>` +
        `${element.description}<br>`,
    ),
  );
}

// You should get product information in JSON format and render data in the page
const url =
  "https://remote-assignment.s3.ap-northeast-1.amazonaws.com/products";
ajax(url).then((data) => {
  render(data);
});
