# Project Description
### Problem Statement
Human lives are at risk, and human discrimination is impacted by AI models used for autonomous vehicles in challenging ethical vehicular-crash situations and decisions. As self-driving cars become more prevalent engineers will inevitably have to face the ethical implications of unavoidable car accidents.
If a driver is unable to avoid an accident and the only choices are to crash into a wall, a person or a group of people, what choice should they make? The driver would have to make this choice quickly on the road.
Self-driving cars will also have to make this choice. Luckily, since self-driving cars are built by humans we have the advantage of making the choice long before an accident ever happens.
### Our Solution
This project aims to answer this question by presenting users with a series of scenarios. The user will have to choose what decision would be best for that situation. 
We will keep track of the answers and the result of all the users' choices will be presented to see what the general consensus is.
Hopefully these results will be informative to engineers and researchers, providing insight into what a majority of the people believe is an acceptable solution.

# Setting Up Editing And Running
1. Make sure you have [Node.js](https://nodejs.org/en) installed.
2. Open a terminal and run `git clone https://github.com/Baconwolf5986/driver-dilemma.git`
3. Enter the directory by running `cd driver-dilemma`
4. Make changes to the website by editing the [src/App.js] file.
5. In the driver-dilemma directory run `npm start` to test the app (Read more starting at [Available Scripts](#available-scripts))

# Planned Features
- [x] Website presenting the ethical dilemma and situations.
- [x] Situations presented as a game (Image map with buttons) or poll (Situation + Answers).
- [x] Results of the users' choices presented in a bar graph. (Using firestore and chartjs)
- [ ] Prevent multiple votes from the same user. (Using localstorage)

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
