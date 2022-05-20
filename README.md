# Project Title

### Comic Books from Marvel

---

# Motivation

As an MCU fan, I decided to take a look at the artwork from the comics Stan Lee started back in the 1960s. Pretty great stuff! While Stan didn't do the artwork himself, his creations inspired what was to become one of the greatest legacies in the comic book world, and, in this writer's humble opinion, one of the greatest movie franchises ever.

>“To me, writing is Fun. It doesn’t matter what you’re writing, as long as you can tell a story.”
>
>~Stan Lee

---

# Code Style

Used react, javascript, html, css, json to create this project.

---

# Code Example

```js
 function Comics () {
    const publicKey = "30d1009ef6cc717088bed0009f9ee355"
    const hash = "37efc00f48c455559cea8f56cf80b20d"
    const [comicsList, setComicsList] = useState (null)

    useEffect(() =>  {
        fetch(`http://gateway.marvel.com/v1/public/comics?ts=1&apikey=${publicKey}&hash=${hash}`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
             setComicsList(data.data.results)})
       
        .catch(error => console.log("error!"))
    }, [])
```

---

# API Reference

https://developer.marvel.com/documentation/getting_started

---

# Credit

Thanks to @2022Marvel for having APIs, and to the instructors at GA for helping me get so far in this project!

## Trials and tribulations

Going through a coding boot camp is a helluva lot harder than I ever thought it would be. I knew going in there would be challenges, but having loved math (through Algebra 2) in high school, and having taken pre-algebra again for college about 25 years later and getting an A, I thought it would be more easily understood by me than it has been.

Turns out I was wrong.

This project broke me. I cried four times in the span of a week. And I rarely cry. In fact, I don't think I've really cried much since my Mom died in 2000, except for when I've thought of her. (When I say this, I mean crying for me, not for someone else.) But in typing this, I think I've realized it's because this class means so much to me. I must care a great deal if it gets me that emotional, right?

It's time to double-down and really learn this stuff. I want a better life for myself. I don't need to be a millionaire, but I'd like to travel more and live in a nice home.

Anyway, I still believe in the end this will all have been worth it. I'm not ready to give in.





---

---

---


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
