Todo App

![build](https://github.com/luc-tuyishime/academic-test/actions/workflows/build.yml/badge.svg)

## Frontend URL

[Todo web](https://6637ff75240d763282e97cd2--academic-react.netlify.app/#)

## Strategies

- Project Setup and Environment configuration

  - Create a new project
  - Initialize a version control system, Git.
  - SetUp the preferred code editor
  - Install node and npm if not already installed
  - Initialize a new React project

- Understand the requirements

  - Gather and analyze the project requirements, including features, users interfaces and functionalities

- Component Architecture Design

  - Plan the component structure.
  - Break down the UI into reusable components.

- Component Implementation:

  - Create React components based on the component architecture
  - Uses Tailwind css for styling

- State Management

  - Implement global state management using Pinia

- Routing

  - Implement client side routing using react-router-dom

- Testing

  - Write unit tests for components
  - Add Github action that run all tests on PR events

- Optimization

  - Optimize performance by minimizing re-renders, using v-memo as memoization techniques.

- Error handling and Logging

  - Implement error handling and logging mechanisms
  - Handle both client and server-side errors.

- Deployment

  - Choose a hosting platform like (Netlify) to deploy the Frontend Application
  - Login to Netlify and link your Github repository with Netlify
  - Deploy your app

  ## APIs

  - Add Todo: I have realised that the API does not add a new todo to the server
  - Update Todo: Same with the Update todo
  - Delete Todo: Same with delete todo

## Tools Used

### Languages

```
Javascript - typescript
```

### Libraries

```
React
```

### Style Guide

```
Eslint - prettier
```

## Installing

To run the app, you will need to install _NodeJS_ Vite CLI on your Operating System if you don't have it installed.

[Install NodeJS](https://nodejs.org/en/)
[Install Vite-CLI](https://vitejs.dev/guide/)

After run

```
npm install
```

## Run the server

```
> npm run dev
```

## Run the test

```
> npm run test
```
