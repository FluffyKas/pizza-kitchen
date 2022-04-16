# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

I actually expanded upon it a bit. You could say this is a completely different project >.<

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

The extra bits I added:

- multiple pages, routing
- turned it into an super simple pizza app
- create-your-pizza function
- pizza-loader while user is waiting for the delivery
- contact form
- signup/login function with Firebase
- password reset function with Firebase
- light/dark theme
- turned rating card into a modal

### Screenshot

![](./screenshot.jpg)

### Links

[Live site](https://pizza-kitchen.netlify.app/)

## My process

The original component was pretty simple. Once it was done I decided to create a simple pizza app out of it (even though I had to change the wording of the actual challenge >.<). I was having a lot of fun with this so I kept adding new stuff. The design isn't the fanciest as I'm not a professional, nor was that the point here. I wanted to practice a couple of things instead: React, Firebase and animations.

I don't want to pretend I reinvented the wheel here, I used a bunch of resources (most of the articles, videos and other stuff are listed below) to complete this, as most of the these things were pretty new / completely new to me but I learned heaps.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Sass
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/)
- [Framer Motion](https://www.framer.com/motion/)
- [Firebase](https://firebase.google.com/)

### What I learned

- Framer Motion: I'm still not comfortable with this but I feel like I'm getting somewhat better. I learned how to animate routes which honestly makes so much difference ( I opted for a really subtle fade in).
- React context: Only used it for the authentication, and purely for the sake of trying it out. Probably could've gotten away without it. As cool as it is, it's something I'm probably going to use pretty sparingly in the future. It's on overkill for most purposes and it affects component reusability badly I reckon (I may be wrong and I may review this thought later but for now this is the way it seems to me).
- useState, useRef
- input handling
- routing
- Firebase authentication (looked into storage as well but not implemented yet, may do in the future though if I decide to add more things to the app)

### Continued development

There are a few things I'd like to learn more about next:

- Framer Motion: need to learn how to do exit animations
- How to better handle images so they don't affect performance as much
- React custom hooks
- Firebase storage: would be nice to use in a small sideproject

### Useful resources

- [Firebase Course](https://www.youtube.com/watch?v=9zdvmgGsww0) - great Firebase course from Net Ninja
- [Setting up Firebase auth](https://www.youtube.com/watch?v=PKwu15ldZ7k) - it's a bit dated but a good starting point that works fine with some modifications
- [Input animation](https://www.youtube.com/watch?v=v8mRUU3orjI) - A video on how to animate the input label with CSS only
- [useLocalStorage React hook](https://www.npmjs.com/package/use-local-storage) - A hook that simplifies using LocalStorage
- [Easy Dark Mode Setup in React](https://css-tricks.com/easy-dark-mode-and-multiple-color-themes-in-react/) - Using the above mentioned LocalStorage hook
- [React docs on uncontrolled components and useRef](https://reactjs.org/docs/uncontrolled-components.html)
- [Article on controlled vs uncontrolled components](https://goshacmd.com/controlled-vs-uncontrolled-inputs-react/)
- [Page transition effects with Framer Motion](https://www.youtube.com/watch?v=FdrEjwymzdY)
- [Click outside to close mobile menu in React](https://www.youtube.com/watch?v=eWO1b6EoCnQ)

## Author

- Frontend Mentor - [@FluffyKas](https://www.frontendmentor.io/profile/FluffyKas)

## Acknowledgments

I got the arrow icon on Flaticon so I'll leave the attribution [here](https://www.flaticon.com/free-icons/arrow): made by rang - Flaticon
All the other pictures (bg image, pizza loader) were made by my sister
