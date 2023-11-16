# React Portfolio with ViteJS
Assignment for Week 20 - React for bootcamp.

## Task
Creating a single page application using React and the template framework [Vite](https://vitejs.dev/) to display a portfolio showing a few different "page" elements - such as the main page aka About Me, a Projects page that displays a handful of assignments done throughout the bootcamp with links to their GitHub repos and the deployed application/walkthrough video, a Contact Me page with a form to fill out and submit, and Resume page that includes listing proficiencies in both frontend and backend and at the top of the page is a link to view and/or download my actual resume. The page elements are also the Nav and Footer elements themselves. The Nav contains the above, and the Footer contains links to my GitHub, LinkedIn, and Twitter profiles.

Initially starting the project with dependencies and whatnot was fairly simple, as installing Vite with the NPM command `npm create vite@latest` will generate the template, where you simply have to input the project name, and then select the framework - `React` in this case, and then select the variant - just `Javascript` (not `Javascript + SWC`). That automatically generates a base/main folder with several base files such as `package.json` and `.gitignore` as well as subfolders with other starting files in them.

The `package.json` file already had several dependencies and devDependencies pre-installed - `react`, `react-dom`, `@types/react`, `@types/react-dom`, `vitejs/plugin-react`, `eslint`, `eslint-plugin-react`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`, and `vite`. The only other dev/dependencies that were needed to be installed were: `react-router-dom` and as for myself with this one specifically `@fortawesome/fontawesome-svg-core` `@fortawesome/free-brands-svg-icons` `@fortawesome/react-fontawesome` for using icons.

I also used [Netlify](https://www.netlify.com/) to deploy this application by letting it go through my GitHub repo.

## Screenshot


## Web Link
You can visit the deployed application [here](https://react-portfolio-sw722.netlify.app/)!