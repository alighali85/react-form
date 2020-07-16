## Dynamic form creator for [Wooga](https://www.wooga.com/)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Coding approach
- I will code the core form functionality in pure JSX React and html.
- for the outer app, I will use Bootstrap to give nice appearance in shorter time.
- for CSS I am using CSS-in-JS (using Bootstrap theme as base) but can use it also without bootstrap theme.
- I am using React-hooks and functional components.
- For testing, I am using `@testing-library/react` with `jest` as test runner for `Functional/Component` tests.
- faking backend response, using promises

## design pattern
- I am using components/containers pattern like MVC
- adding and entry point to each folder `(in package.json)`, help us not to have all the file with `index.js` name.
- encapsulated components, each component is independent of the other and can be reused or removed safely (that includes its test as well)

- on a Business level I would use one of well maintained and ready-implemented frameworks like (Formik)


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

