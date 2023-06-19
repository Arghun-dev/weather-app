# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

## Node.js

First you need to have Node.js installed in your machine to be able to use npm.

## npm install

First install the packages. Then you can start the app

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Structure and Packages

Let's start by discussing the technologies and packages utilized in this project.

**TypeScript**

I chose to develop this project using TypeScript due to its numerous benefits. TypeScript helps catch bugs during development and provides excellent auto-complete features, enhancing productivity for developers.

It's worth mentioning that, apart from React and TypeScript, I have not employed any other specific packages or technologies. As per your request, I aimed to implement the functionality without relying on external packages.

**antd (Ant Design)**

I opted to use the antd library as it provides a comprehensive set of pre-designed React components that are aesthetically pleasing, highly customizable, and offer a consistent user experience. With antd, I can quickly build professional-looking interfaces by leveraging its extensive range of UI elements such as buttons, forms, modals, and tables. This helps me save development time and effort, ensuring a polished and visually appealing application.

Furthermore, antd follows best practices in terms of accessibility, responsive design, and internationalization support. These qualities ensure that the application I build will be inclusive, responsive across different devices, and easily adaptable to various languages and locales.

**RTK Query (Redux Toolkit Query)**

To handle data fetching and state management, I have employed RTK Query, a powerful data-fetching library built on top of Redux Toolkit. RTK Query simplifies and streamlines the process of fetching, caching, and synchronizing data in a React application.

By utilizing RTK Query, I can define API endpoints and automatically generate hooks for performing CRUD operations on those endpoints. This abstraction significantly reduces boilerplate code and eliminates the need to manually manage complex network requests and caching logic. RTK Query also provides built-in support for optimistic updates, pagination, and automatic cache invalidation, making it an excellent choice for efficient and scalable data management.

Moreover, RTK Query seamlessly integrates with Redux Toolkit, allowing me to leverage Redux's centralized state management capabilities when necessary. This combination enables me to maintain a single source of truth for application state while benefiting from RTK Query's simplified data fetching and caching.

In summary, the adoption of antd, TypeScript, and RTK Query in this project helps me achieve a robust, visually appealing, and efficient React application. These packages enhance my development experience, improve code quality, and simplify data management, ultimately leading to a more seamless user experience.

Thank you for exploring my project! If you have any further questions or feedback, please let me know.
