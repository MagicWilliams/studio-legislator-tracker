# Legislator Tracker

### General Overview
**Technology TLDR**:
The project uses Node with Express for the server-side, and React on the client-side. Webpack handles building our client-side JS and CSS. Since this project primarily uses ES6 (aka ES2015) Javascript, Webpack uses Babel to transpile the JS so it can be interpreted by the browser.

**Building & Running**:
To setup up this project, `git clone` it onto your machine, `cd` into the project, and then run `npm install`. Once all of the required modules are downloaded, you need to start a server for the project. There are two ways do this:
- _webpack-dev-server_: Use this while working on client-side development by running `webpack-dev-server` from the project's root directory. Each time you save, this server will rebuild the project and refresh the localhost page in your browser. Put this in a separate terminal tab. Note that rebuild/refresh on save doesn't editing working with files in the `src/static` directory; you'll have to restart the server by hand.
- _Node.js server_: This will start the project through or `index.js` code. If you are making server-side code changes, use this. Just run `npm start`.

### Client-Side (React & react-router)
**Components**: All React components should be placed in the `src/components` directory.

**Static Files**: When we build/rebuild our project with Webpack, it produces a file called `src/static/js/bundle.js`. `bundle.js` contains our entire React project bundled into one uglified JS file. Our root HTML file, `src/static/index.html`, imports this file as a script and the uglified React updates the contents of the DOM element with `id="main"`. Our Webpack build process also builds CSS from around the project into a uglified CSS file called `src/static/css/styles.css`, which is also imported into our root HTML file. There's an additional `src/static/base.css` file that holds CSS that needs to affect DOM elements that are higher than the scope of React components (like `<body>` or `<html>`). Static assets like images, videos, p5.js animations, etc are also in the `src/static` directory. 

### Working with CSS
The file placement convention we follow is to simply create a CSS file (or several) within the same folder as the component you wish to style. Applying styles to specific elements within those components is as simple as specifying a className in JSX, making it styleable from CSS.

