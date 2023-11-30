# Netflix GPT

Movies recomandation with AI.

## Setup

- Install react app using create-react-app (CRA)

```js
npx create-react-app netflix-gpt
```

- Create `.env` file and put configure

```js
REACT_APP_BASE_URL = YOUR_APPLICATION_BASE_URL; // http://localhost:300
REACT_APP_OPENAI_KEY = YOUR_API_KEY_WILL_HERE;
REACT_APP_TMDB_KEY = YOUR_API_KEY_WILL_HERE;
```

- Install and init tailwind css

```js
npm install -D tailwindcss
npx tailwindcss init
```

- Configure tailwind css in your project

  `npx tailwindcss init` command will create a file `tailwind.config.js` in your project's root directory.
  Open `tailwind.config.js` and replace all content with below code.

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

- Add the @tailwind directives for each of Tailwind’s layers to your ./src/index.css file.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- Now you created a react app with tailwind css successfully. Now run the below command on your terminal to start your local development server.

```js
npm start
```

## Features

- Home Page (is user !authorised)

  - Signin/Signup Page
    - SignInForm / SignUpForm

- Browse Page

  - Navbar
  - Showcase
  - Trendings
  - MoviesSuggestion
    - MoviesList \* N

- NetflixGPT
  - Search
  - MoviesSuggestion

## Screen Shot

Live Demo : [Live Demo](https://okneeraj.github.io/netflix-gpt "Live Demo")

## Screen Shot

- Landing Page

  ![Landing Page](https://okneeraj.github.io/netflix-gpt/screenshot/01-Landing.png)

- Signin Page

  ![Signin Page](https://okneeraj.github.io/netflix-gpt/screenshot/02-Signin.png)

- Signup Page

  ![Signup Page](https://okneeraj.github.io/netflix-gpt/screenshot/03-Signup.png)

- Browse Page

  ![Browse Page](https://okneeraj.github.io/netflix-gpt/screenshot/04-Browse.png)

- Movie List

  ![Movie List](https://okneeraj.github.io/netflix-gpt/screenshot/05-Movie-List.png)

- Shimmer Loading

  ![Shimmer Loading](https://okneeraj.github.io/netflix-gpt/screenshot/06-Shimmer-loading.png)

- Search Page

  ![Search Page](https://okneeraj.github.io/netflix-gpt/screenshot/07-Search.png)

- Watch Now Page

  ![Watch Now Page](https://okneeraj.github.io/netflix-gpt/screenshot/08-Watch.png)

# 💖 Support This Project

Thank you for taking the time to explore NetflixGPT! This project represents an in-depth implementation of features extracted from the inspiring course "Namaste-React" by Akshay Saini. It's been a rewarding journey, and I'm genuinely grateful for the opportunity to create and share this with the community.

I want to express my heartfelt thanks to everyone who has shown interest and provided feedback. Your support and involvement mean a lot to me.

If you have any questions, suggestions, or just want to connect, feel free to reach out.

`<Happy coding />`

## 🙏 Thank You 🙏

Feel free to modify it to suit the tone and style of your project. The goal is to encourage participation, collaboration and learning.

Made with ❤️ and React.
