# Trivia Challenge

This is a repository for a technical challenge for a job interview. The challenge is to create a trivia game using the [Open Trivia Database](https://opentdb.com/).

## Requirements

-   [x] The game should have 10 questions.
-   [x] Each question should have 2 possible answers (True or False).
-   [x] The game should have 3 screens: a welcome screen, a screen with the questions and a final screen with the results.

## Screenshots

-   Welcome Screen
    ![Welcome Screen](/public/welcome.png)

-   Questions Screen
    ![Questions Screen](/public/question.png)

-   Results Screen
    ![Results Screen](/public/result.png)

## Technologies

-   [React](https://reactjs.org/): A JavaScript library for building user interfaces.
-   [Redux](https://redux.js.org/): A predictable state container for JavaScript apps.
-   [Redux Toolkit](https://redux-toolkit.js.org/): The official, opinionated, batteries-included toolset for efficient Redux development.
-   [TypeScript](https://www.typescriptlang.org/): A typed superset of JavaScript that compiles to plain JavaScript.
-   [Html-React-Parse](https://www.npmjs.com/package/html-react-parser): A utility for converting HTML strings into React components.

## How to run

1. Clone this repository
2. Install dependencies
    ```bash
    npm install
    ```
3. Create a `.env` file in the root directory and add the following environment variables:
    ```bash
    VITE_API_URL=https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean
    ```
4. Run the app
    ```bash
    npm run dev
    ```

## Deployed version

You can find a deployed version of this app [here](https://trivia-challenge.pages.dev/).
