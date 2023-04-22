// Make an AJAX call to https://api.github.com/orgs/facebook/repos?per_page=5&page=1 by Fetch API,
// and show the name, visibility, description, and topics for each item in the page. When the user
// clicks the More button, show 5 more items.

const neededAttr = ["name", "visibility", "description", "topics"];

const ajax = (url) => {
  return fetch(url).then((data) => data.json()); // get array
};

const objectAttrFilter = (data) => {
  return Object.keys(data)
    .filter((key) => neededAttr.indexOf(key) > -1)
    .reduce((cur, key) => Object.assign(cur, {[key]: data[key]}), {});
};

const render = (data) => {
  console.log(data);
  data = data.map((obj) => objectAttrFilter(obj));
  console.log(data);

  let body = document.querySelector("body");
  data.forEach((obj) => {
    body.insertAdjacentHTML("beforeend", obj);
  });
};

const url = "https://api.github.com/orgs/facebook/repos?per_page=5&page=1";

ajax(url).then((data) => {
  render(data);
});
