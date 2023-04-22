# Perform Side Effects with useEffect

You've learned that there are different phases in a React component's lifecycle: mounting, updating, and unmounting. React provides lifecycle methods to run code at these specific moments. They are used to re-render a component, update the DOM when data changes, fetch data from an API or perform any necessary cleanup when removing a component. Developers refer to these types of actions as "side effects" because you cannot perform them during rendering (additional code runs after React updates the DOM).

Common lifecycle methods React uses to handle side effects in class components are `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`. Forgetting to include one of these methods when needed, can leave us with stale data or memory leaks. With Hooks, you no longer need to convert a function to a class component when you need to access a lifecycle hook.

## Perform Side Effects in Function Components

React provides the `useEffect` Hook to let you perform side effects in function components, and give them access to common lifecycle hooks.

First, import `useEffect` from React:

```jsx
import React, {useState, useEffect} from "react";
```

In your component, define the `useEffect()` Hook. `useEffect` receives a callback function as the first argument, which is where you perform any side effects:

```jsx
import React, { useState, useEffect } from 'react';

function App() {
  const [score, setScore] = useState(0);
  const [message] = useState('Welcome!');

  // The effect happens after render
  useEffect(() => {
    console.log('useEffect called!');
  });

  return (...);
}
```

The `useEffect` Hook instructs React to do something after render, so it's called when the component first renders and after each subsequent re-render or update. If you run the code above, notice how "useEffect called!" immediately displays in the console. The message displays, again and again, each time the `score` state updates.

## Prevent `useEffect` from Causing Unnecessary Renders

Since `useEffect` gets called after every render, applying it after each render might create a performance problem. The `useEffect` Hook takes an optional array as a second argument that instructs React to skip applying an effect (and re-rendering) if specific values haven’t changed between re-renders.

In the array, you list any dependencies for the effect. In other words, any state variables that are used or updated inside `useEffect`. The array instructs the `useEffect` Hook to run only if one of its dependencies changes.

In this example, there are no dependencies; however, passing an empty array as the second argument will run `useEffect` only once after the initial render:

```jsx
function App() {
  const [score, setScore] = useState(0);
  const [message] = useState('Welcome!');

  useEffect(() => {
    console.log('useEffect called!');
  }, []); // pass an empty array to run useEffect once

  return (...);
}
```

## Access State Inside `useEffect`

You're able to access a state variable (even update state) from inside `useEffect`. A common example is updating the document's title when state changes. Manually changing the DOM in React components, as shown below, is one example of a side effect:

```jsx
function App() {
  const [score, setScore] = useState(0);
  const [message] = useState('Welcome!');

  useEffect(() => {
    document.title = `${message}. Your score is ${score}`;
  }, []);

  return (...);
}
```

Notice how `useEffect` uses the `score` and `message` variables. This means that the variables are now dependencies that need to be listed inside the array. If you do not list `score`, for example, the title will not display the updated score.

React runs `useEffect` to compare `score` from the previous render to score from the next render. Each time the value of `score` changes (increments/decrements), React re-applies the effect and updates the page's title:

```jsx
function App() {
  const [score, setScore] = useState(0);
  const [message] = useState('Welcome!');

  useEffect(() => {
    document.title = `${message}. Your score is ${score}`;
  }, [message, score]); // add dependencies

  return (...);
}
```

## Data Fetching with `useEffect`

You'll most likely use the `useEffect` Hook to fetch data from an API. Consider the following example, which fetches data (a random dog image) from the [Dog API](https://dog.ceo/dog-api/):

```jsx
function App() {
  const [data, setData] = useState("");

  useEffect(() => {
    console.log("useEffect called!");
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => setData(data.message))
      .catch((err) => console.log("Oh noes!", err));
  }, []);

  return (
    <div className="App">
      <img src={data} alt="A random dog breed" />
    </div>
  );
}
```

Again, passing `useEffect` an empty array as the second argument ensures that it runs only once after the component's initial render. In some cases, omitting the second array argument causes `useEffect()` to execute in an infinite loop, endlessly fetching data. This happens because you're modifying the component's state inside `useEffect()`, which triggers the effect again and again.
