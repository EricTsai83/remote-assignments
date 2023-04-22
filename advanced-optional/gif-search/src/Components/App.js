import React, {useState, useEffect} from "react";
import "../App.css";
import axios from "axios";

import SearchForm from "./SearchForm";
import GifList from "./GifList";

function App() {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("cats");
  const [isLoading, setIsLoading] = useState(true);

  const performSearch = (value) => setQuery(value);

  useEffect(() => {
    // Be sure to add your API key
    axios(
      `http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=5CKAKgBFgYkEj4p6zdYWri6hlYC5ZkvE`,
    )
      .then((response) => setData(response.data.data))
      // .then((response) => console.log(data))
      .catch((error) => console.log("Error fetching and parsing data", error))
      .finally(() => setIsLoading(false));
  }, [query]);

  return (
    <>
      <div className="main-header">
        <div className="inner">
          <h1 className="main-title">GifSearch</h1>
          <SearchForm onSearch={performSearch} />
        </div>
      </div>
      <div className="main-content">
        {
          isLoading ? <p>Loading...</p> : <GifList data={data} /> // pass down the data state
        }
      </div>
    </>
  );
}

export default App;
