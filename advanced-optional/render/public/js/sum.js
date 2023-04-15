// You have built your first API in the backend, then let’s get back to the front-end.
// Follow the steps below to send an HTTP request to your backend API by AJAX.

const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', () => {
  const inputValue = document.getElementById('inputField').value;
  // const params = new URLSearchParams();
  // params.append('number', inputValue);
  const url = `./getData?number=${inputValue}`;
  const options = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };
  fetch(url, options)
    .then(response => response.json())
    .then(data => {
      document.getElementById('result').innerHTML = 'Result: ' + data;
    })
    .catch(error => console.error(error));
});
