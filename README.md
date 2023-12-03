# Web Lv2 • Task #1: UMS Home page

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#this-challenge-build-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [My Accounts](#my-accounts)
  - [Gmaill](mailto:samirahmad5445@gmail.com)
  - [GitHub](https://github.com/SamirAhmad5445)
- [Get Started](#get-started)

## Overview

### The challenge

The challenge is about reverse engineering the home page of the university website [UMS](https://ums.asu.edu.eg/). The page contains various components such as sliders, tabs, and forms. It is a very useful experience and a great opportunity to practice reading other people’s code as well as coding yourself. You will learn how to analyze the structure and style of a web page, and how to recreate it using HTML, CSS, and JavaScript. This challenge will test your creativity, problem-solving, and web development skills. Are you ready to take on this challenge? if the answer is yes take a look at [style-guide.md](/style-guide.md) and goof luck.

### Screenshot

[![UM UMS Home page](/public/assets/images/ums.png)](https://react-ums.vercel.app/)

### Links

- Solution URL: [Go To The Github Repo](https://github.com/SamirAhmad5445/react-ums-home-page)
- Live Site URL: [Click Here for The Live Page](https://react-ums.vercel.app/)

## My process

### This Challenge build with

- [React](https://react.dev/) + [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

### What I Learned

One of the challenges of working on a large website like UMS is to manage a large amount of data, assets, and components. In this challenge, I took a new approach that I have never tried before in React. I implemented the SCSS module approach in the assets and components, and it works like this:

```
/
├── public/
│ └── assets/
│ └── favicon.svg
|
├── src/
| ├──components/
| | ├── ComponentA.jsx
| | ├── ComponentB.css
| | ├── ComponentB.jsx
| | ├── ComponentC.jsx
│ | └── index.js
| |
│ └── sections/
| | ├── SectionA.jsx
| | ├── SectionB.jsx
│ | └── index.js
| |
│ └── index.css
│ └── App.jsx
└── package.json
```

In /App.jsx, I can import any component or section from the corresponding directories, thanks to the index.js files. My App.jsx looks like this:

```jsx
import { SectionA, SectionB } from "/sections";
import { ComponentC } from "./component";

const App = () => {
  return (
    <main>
      <ComponentC />
      <SectionA />
      <SectionB />
    </main>
  );
};

export default App;
```

This way, I can easily keep track of the needed components in each part of the project. I also learned how to use SCSS variables, mixins, and nesting to make my CSS code more modular, readable, and reusable. I enjoyed this challenge a lot, and I hope you did too! 😊

### Continued Development

I want to learn backend development and create dynamic web apps. I want to connect my frontend with a server, database, and API. I want to try different technologies and frameworks, such as Node.js, Express, etc. I want to keep working on this project and improve my skills. And one day i'd have my own UMS. 😂

## My Accounts

- GitHub - [@SamirAhmad5445](https://github.com/SamirAhmad5445)
- Gmail - [samirahmad5445@gmail.com](samirahmad5445@gmail.com)

## Get Started

1. Clone this repo with `git clone` + the repo url.
2. run `npm install` to install all dependencies.
3. start the server with `npm run dev` or `npx vite` & have fun 😊.
