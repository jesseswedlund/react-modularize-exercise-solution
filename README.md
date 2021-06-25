# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Exercise Instructions

### Set Up
1) Clone this repo and then open it in VS Code
2) Run "npm install" in the terminal
3) Run "npm start" to view the site on local host
4) Inspect the site with dev tools and poke around

### Modularize the App!
- Check out App.js. The entire application is written in one huge component!

- Look at the JSX in App.js and think about what can become its own component. Make a list of what you
think could become its own component.

- For each new component, create a new .js file in the "components" directory, then copy the desired JSX
from App.js and paste it into your new component's return. I've included a couple example components to 
remind you how props, state, class methods work. Then import your new component into App.js and replace 
the JSX that you copied and pasted with your new component.

- Bonus 1: Make a ProjectTile component and see if you can dynamically render the 6 Project Tiles using the map array method.
Since each one is the same except for the string in each img src, think about how you can use an array and map to render all 
six Project Tiles, passing a prop that you can use in the img src.

- If you run into issues or errors, use google, stack overflow, the React docs, and each other to try to figure it out!  




