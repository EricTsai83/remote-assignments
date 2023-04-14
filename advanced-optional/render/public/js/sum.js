const submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', () => {
  // Code to be executed when the button is clicked
  let inputValue = document.getElementById('inputField').value;

  let xhttp = new XMLHttpRequest();
  // An AJAX request is sent to the server with the URL as the argument to the open() method.
  xhttp.open('GET', `./getData?number=${inputValue}`);
  // When the response is received, the onreadystatechange function is called with the response data.
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var response = this.responseText;
      document.getElementById('result').innerHTML = 'Result: ' + response;
    }
  };
  xhttp.send();
});
