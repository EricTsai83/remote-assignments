// Require https module
function getDef(term) {
  try {
    // request data
    const request = https.get(
      `https://dictionaryapi.com/api/v3/referenced/vollegiate/json/${term}?key=我的 API key`,
      (response) => {
        let body = "";
        // Read the data
        response.on("data", (data) => {
          body += data.toString();
        });

        response.on("end", () => {
          // Parse the data
          const definition = JSON.parse(body);
          // Print the data
          console.log(definition[0].shortdef);
        });
      },
    );
    request.on("error", (error) => console.error(error.message));
  } catch (error) {
    console.error(error.message);
  }
}

const query = process.argv.slice(2);
query.forEach(getDef);
