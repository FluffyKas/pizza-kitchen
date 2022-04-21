Great job on this challenge, everything is smooth and awesome 👏

In regards to your code, There are some issues that I like to mention.

- Components which are used as react router element, should be separated from other components. This is not crucial but it helps us to maintain our codebase easier. Usually we create a folder called `/pages` or `/views` and put our page components there.

- For importing and exporting components, it's better to first reexport them from an `index.js` file inside `components` folder, and then when we want to import them somewhere else, we can import them all at once. To make it more clear look at the following example

⛔ BAD PRACTICE

```js
//APP.JS

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Base from "./components/base/Base";
```

✅ GOOD PRACTICE

```js
// components/index.js

import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Base from "./components/base/Base";

export { Header, Home, Base };
```

```js
//APP.JS

import { Header, Home, Base } from "./components";
```

This way you'll have much more cleaner syntax and also it is easier to maintain 👆

- When multiple components are using same values, we MUST use context to avoid [prop drilling](https://kentcdodds.com/blog/prop-drilling). For example themes are something that are used globally in our app so we shouldn't pass it as a prop, we should isolate it inside a context and each time a components needs it, we can provide theme to it, Here is a theme context that I wrote for your app, by using `useTheme()` you can use `theme` and `setTheme` value across your whole application :

```jsx
import { useContext, createContext } from "react";
import useLocalStorage from "use-local-storage";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const defaultDark = window.matchMedia("(perfers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
```

- We have same [prop drilling](https://kentcdodds.com/blog/prop-drilling) issue for your pizzas too ! Right now you're drilling `newPizza` and `setNewPizza` into four different components, and this is red flag ! Here is a context which handles our pizzas so we can have access to `newPizza` and `setNewPizza` across our whole application :

```jsx
import { useState, useContext, createContext } from "react";

const PizzaContext = createContext();

export function PizzaProvider({ children }) {
  const [newPizza, setNewPizza] = useState({ base: "", toppings: [] });

  return (
    <PizzaContext.Provider value={{ newPizza, setNewPizza }}>
      {children}
    </PizzaContext.Provider>
  );
}

export function usePizza() {
  return useContext(PizzaContext);
}
```

- As a developer, we must follow [DRY](https://thevaluable.dev/dry-principle-cost-benefit-example/) principle to keep our code maintainable, repetition is a red flag whenever and where ever we see duplicated code, we must figure out a way to fix it. For example inside your `RatingCard` component, You've repeated the same input for 5 times with different values, this is a bad practice. Instead you can create an array of inputs ( ideally react components ) and loop through them using `map()` method, Here is my refactored version of your `RatingCard` :

```jsx
const nums = [1, 2, 3, 4, 5];

<div className="input-container">
  {nums.map((num, index) => {
    return (
      <div className="focus-box" key={index}>
        <input
          type="radio"
          name="rating"
          id={num}
          value={num}
          onClick={selectRating}
        />
        <label htmlFor={num}>{num}</label>
      </div>
    );
  })}
</div>;
```

- It's better to keep react components under 100 lines, I'd say 60 or 70 lines is ideal, but as soon as your component exceed 100 lines, it's time to break it up to separate components. Although It's fine to sometimes have [long jsx](https://kentcdodds.com/blog/when-to-break-up-a-component-into-multiple-components).

- Right now there is way too much repetition inside your `ContactPage`, Each input should be separate component. I recommend you to learn [React Hook Form](https://react-hook-form.com/), This package has made my life 10 times easier.

- Use SCSS modules instead of global SCSS

- You can use [React icons](https://react-icons.github.io/react-icons/) for your icons, it's easier and more reliable than using external assets IMO.

✅ Also I opened a pull request to your repo which fixes most of the issues I mentioned, Also you can find this comment there, inside `ISSUES.md`. Hope this helps.
