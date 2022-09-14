# Getting Started with Create React App

This project was originally bootstrapped with [Create React App](https://github.com/facebook/create-react-app). The src folder was emptied (minus index.js) after re-reading the requirements, so that I could continue to use *npm start* to run locally while working in the public folder with vanilla JS. Eventually, I moved to the [Local Web Server module](https://github.com/lwsjs/local-web-server).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app via the local web server.\
Open [http://localhost:8000](http://localhost:8000) to view it in your browser.

The page will not reload when you make changes.\
You may also see any lint errors in the console.

## How to use

WASD or Up/Down/Left/Right arrows to navigate
Enter to see show details
Backspace (or use keys to get to back button) to navigate back to home screen

## Notes
Assuming home page does not need to reload when navigating back.
No resize handlers, as that is not expected on a connected device.
API returns images as JPEGs at 500px wide. Rather than maniuplating the URLs for this example, I would discuss with backend team about changing some of the images to be wider and/or PNGs.

## TO-DO:
Implement a loading modal
Minimize code for production; need for a single file for connected devices?