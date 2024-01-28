# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#Links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)

## Overview

### The challenge

Users should be able to:

- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`).

### Screenshot

![](screenshot.png)

### Links

- Live Site URL: []

## My process

### Built with

- Semantic HTML 5 markup
- CSS Grid
- Javascript

### What I learned

In this project, I learned how to validate name, password, and email inputs on a single click using the JS DOM manipulation.
I also learned how to add color to a plain background image using blend-mode: multiply.
```css
body {
  background-color: hsl(0, 100%, 74%); /* orange */
  background-image: url(images/bg-intro-desktop.png);
  background-blend-mode: multiply;
}
```
```js
const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", () => {
  verifyName();
  verifyPassword();
  verifyEmail();
})
```