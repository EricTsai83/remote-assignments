# Create a GIF Search App with React Hooks
In this step, you will manage state and fetch data from the Giphy API using function components with useState and useEffect.

## Get started by setting up and running the React application
1. Install project dependencies. Open the `gif-search` project folder in your text editor. Using your terminal (or console), navigate to your project folder and run `npm install` to install all dependencies.
2. Start the application. After the dependencies finish downloading and installing, run `npm start` to start the application.

This will launch your React application at `localhost:3000`. In the browser, you should see the application's main screen.

## What's in the Latest Project Files?
All components of the GIF search app have been converted into function components. You will declare any necessary state and perform data fetching using Hooks. Be sure to review the latest project files before you start.

## Declare the GIF Data State
1. **Open the file** `src/Components/App.js`.
2. Import the `useState` Hook from React:
	
	```jsx
	import React, { useState } from 'react';
	```
	
3. Call `useState()` inside the `App` function. Declare a `data` state and a `setData` function to update the state. Pass `useState()` an empty array as the initial state, as shown below:

```jsx
function App() {
  const [data, setData] = useState([]); // declare state

  return (
    <>
      <div className="main-header">
        <div className="inner">
          <h1 className="main-title">GifSearch</h1>
          <SearchForm />
        </div>
      </div>
      <div className="main-content"></div>
    </>
  );
}
```

> The `data` state will hold the array of GIF objects returned from the Giphy API.


4. In the `App` component's `return` statement, render the `<GifList>` component and pass it the `data` state via a prop named `data`:

```jsx
...
return (
  <>
    <div className="main-header">
      ...
    </div>
    <div className="main-content">
      <GifList data={data} /> // pass down the data state
    </div>
  </>
);
```

## Fetch Data from the Giphy API
When the `App` component renders, it should make a request to the Giphy API and display a set of gifs. We'll once again use [axios](https://www.npmjs.com/package/axios) to fetch the GIF data.

You use the `useEffect` Hook when you need to do something after your component renders (perform a side effect), like fetch data from an API.

1. In `App.js`, import the `useEffect` Hook from React:

```jsx
import React, { useState, useEffect } from 'react';
```

2. Add the `useEffect()` Hook inside the `App` component. The Hook takes a callback function, which makes the fetch request using axios and a set of JavaScript promises.

3. In the `then()` method, use the `setData()` function to update the `data` state with the data returned from the API:

	```jsx
	function App() {
	  const [data, setData] = useState([]);
	
	  useEffect(() => { 
	    axios(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=YOUR_API_KEY`)
	      .then(response => setData(response.data.data))
	      .catch(error => console.log('Error fetching and parsing data', error))
	  }, []);
	
	  return (...);
	}
	```
	
	> Note: Make sure to replace `YOUR_API_KEY` with your API key in the URL to fetch. You can apply API key in [this website](https://developers.giphy.com/)

4. Use a template literal to define the URL to fetch, and interpolate the variable `query` for the query term or phrase to search, as shown above.

## Set the Search Query State
Now let's declare the state variable to hold the GIF search query.

1. In the `App` component, call `useState()` to declare a state variable named `query` and a state updater function named `setQuery`.
Pass useState() a string value as the initial query state:
2. Pass `useState()` a string value as the initial `query` state:

	```jsx
	function App() {
	  const [data, setData] = useState([]);
	  const [query, setQuery] = useState('cats'); // declare new state
	
	  useEffect(() => {
	    axios(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=YOUR_API_KEY`)
	      .then(response => setData(response.data.data))
	      .catch(error => console.log('Error fetching and parsing data', error))
	  }, []);
	
	  return (...);
	}
	```
	
	The `query` state will be updated with the value the user types into the search field.

3. The `query` state is now a dependency of the `useEffect` Hook (we're using it in the search query parameter), so we need to include it in the dependency array -- that's the second argument passed to `useEffect()`:

	```jsx
	useEffect(() => {
	  axios(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=YOUR_API_KEY`)
	      .then(response => setData(response.data.data))
	      .catch(error => console.log('Error fetching and parsing data', error))
	}, [query]); // add the query dependency
	```

Adding the `query` dependency instructs React to call `useEffect()` each time the `query` state updates.

## Update the `query` State
1. In the `App` component, create a function called `performSearch` that updates the `query` state with the value the user submits:

	```jsx
	function App() {
	  const [data, setData] = useState([]);
	  const [query, setQuery] = useState('cats');
	
	  // update the query state
	  const performSearch = (value) => setQuery(value);
	
	  useEffect(() => {
	    ...
	  }, [query]);
	
	  return (
	    ...
	  );
	}
	```
2. Now we need to wire the function up to the `SearchForm` component. In the `App` component's `return` statement, give the `SearchForm` component the prop `onSearch`, passing it a reference to the `performSearch` function:

	```jsx
	  return (
	    <>
	      <div className="main-header">
	        <div className="inner">
	          <h1 className="main-title">GifSearch</h1>
	          <SearchForm onSearch={performSearch} />
	        </div>
	      </div>
	      <div className="main-content"></div>
	    </>
	  );
	```
## Declare the `SearchForm` Component State
The `SearchForm` function component works in much the same way as the class component you wrote in the "Data Fetching in React" workshop. In these steps, you'll declare the state that updates the search query on form submit.

1. Open the file `Components/SearchForm.js`.
2. Import the `useState` Hook from React.
3. Inside the `SearchForm` function, declare a `searchText` state and a `setSearchText` state updater function. Set the initial state to an empty string:

	```jsx
	import React, { useState } from 'react';
	function SearchForm(props) {
	  const [searchText, setSearchText] = useState('');
	
	  const onSearchChange = (e) => {...};
	
	  return (...);
	}
	```
4. In the `onSearchChange` function call `setSearchText` to update the `searchText` state with the value of the search field:

	```jsx
	function SearchForm(props) {
	  const [searchText, setSearchText] = useState('');
	
	  const onSearchChange = (e) => setSearchText(e.target.value);
	
	  const handleSubmit = (e) => { ... };
	
	  return (
	    <form className="search-form" onSubmit={handleSubmit}>
	      <label className="is-hidden" htmlFor="search">Search</label>
	      <input type="search"
	        onChange={onSearchChange} // this value will update state
	        name="search"
	        placeholder="Search..."
	      />
	      <button type="submit" ...>...</button>
	    </form>
	  );
	}
	```
5. The `performSearch` function in `App.js` accepts one argument -- the search query. In the `handleSubmit` function, pass the `searchText` state up to the `App` component via the `onSearch` function callback:

	```jsx
	function SearchForm(props) {
	  const [searchText, setSearchText] = useState('');
	  const onSearchChange = (e) => setSearchText(e.target.value);
	
	  const handleSubmit = (e) => {
	    e.preventDefault();
	   // pass the search text back to the App component
	    props.onSearch(searchText);
	    e.currentTarget.reset();
	  }
	
	  return (
	    <form className="search-form" onSubmit={handleSubmit}>
	      ...
	    </form>
	  );
	}
	```

6. On form submit, the search `query` state gets updated, which triggers the `useEffect()` Hook to fetch new data.

## Add the Loading Indicator
Finally, follow similar steps to add the loading indicator that lets users know the data is loading.

1. In the `App` component, call `useState()` to declare a new `isLoading` state and a `setIsLoading` state updater function. Set the initial `isLoading` state to `true`:

	```jsx
	function App() {
	  const [data, setData] = useState([]);
	  const [query, setQuery] = useState('cats');
	  const [isLoading, setIsLoading] = useState(true);
	
	  useEffect(() => {
	    ...
	  }, [query]);
	
	  return (...);
	}
	```

2. In the `useEffect()` Hook, add the `finally()` method to the end of the promise chain. After fetching the data, `finally()` will update the `isLoading` state to `false`. Pass `finally()` a callback function that calls `setIsLoading()` to update the state:

	```jsx
	function App() {
	  const [data, setData] = useState([]);
	  const [query, setQuery] = useState('cats');
	  const [isLoading, setIsLoading] = useState(true);
	
	  useEffect(() => { 
	    axios(...)
	      .then(response => setData(response.data.data))
	      .catch(error => console.log(...))
	      .finally(() => setIsLoading(false));
	  }, [query]);
	
	  return (...);
	}
	```
	> Note: In this case, you do not need to pass `isLoading` to the dependency array because, like the `data` state, `isLoading` is being updated within the Hook.

3. Lastly, in the `return` statement, render the loading indicator if the `isLoading` state is `true`, or render the `GifList` component if it's `false`:

	```jsx
	...
	return (
	  <>
	    <div className="main-header">...</div>
	    <div className="main-content">
	      {
	        isLoading
	          ? <p>Loading...</p>
	          : <GifList data={data} />
	      }
	    </div>
	  </>
	);
	```

	The final `App` component should now look like this:

	```jsx
	function App() {
	  const [data, setData] = useState([]);
	  const [query, setQuery] = useState('cats');
	  const [isLoading, setIsLoading] = useState(true);
	
	  const performSearch = (value) => setQuery(value);
	
	  useEffect(() => { 
	    axios(...)
	      .then(response => setData(response.data.data))
	      .catch(error => console.log('Error fetching and parsing data', error))
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
	          isLoading
	            ? <p>Loading...</p>
	            : <GifList data={data} />
	        }
	      </div>
	    </>
	  );
	}
	```
	
	Be sure to test your app to make sure that it's fetching GIF data based on the submitted search query.










