# Getting Started with Create React App

This project was originally bootstrapped with [Create React App](https://github.com/facebook/create-react-app). The src folder was emptied (minus index.js) after re-reading the requirements, so that I could continue to use *npm start* to run locally while working in the public folder with vanilla JS.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test` & `npm run build`
***DO NOT RUN THESE***

I do not have any tests set up, and building will overwrite the public folder.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## How to use

WASD or Up/Down/Left/Right arrows to navigate
Enter to see show details
Backspace (or use keys to get to back button) to navigate back to home screen

## Notes
Assuming home page does not need to reload when navigating back.
No resize handlers, as that is not expected on a connected device.
API returns images as JPEGs at 500px wide. Rather than maniuplating the URLs, I would discuss with backend team changing some of them to be wider and PNGs.

## TO-DO:
Implement a loading modal
Minimize code for production; need for a single file for connected devices?