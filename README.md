# About the Project

Kingstutor is an online eductional platform that allows any individual to learn the subject of his/her choice. The platform is developed with the end user in mind as one of it's priorities.

The platform includes several features that makes learning easier than never people. Some of the cool features of the platform are;

-  One on One Lectures:
   Where you have the chance to learn the subject of your choice with the instructor having focus and attention on your growth and development.

-  Group Lectures:
   This feature allows the students to learn the subject the subject of their choice with an atmosphere similar to a traditional classroom.

And many more other features...

# Getting Started with KingsTutor Project

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run format`

This command will run a script that will format all your files as per prettier standard conventions. So it's important to run this script before trying to commit your changes to the repository.

### `npm run check-lint`

Check-lint script will check all your javascript and typescript files as per eslint rules and standard inorder to ensure the proper use of types, correct importations and usage.

**Note: Though it's not apprioprate to use, if the type of the function, parameter or variable is not explicitly known, you may want to give it a type of _any_ so as to avoid a typescript error.**

## Important Information to Know

### `Package manager`

For this project, the package manager used is the default package manager from nodejs, which is `npm`, so it's important to stick to this package manager inorder to avoid conflicting packages, and package manager.

### `Package installations`

Though it is encouraged to always build a package if you have the capability to build it yourself. If for one reason or the other you are not able to build it yourself, it's recommended to install the best package available for the task you want to perform, and let others know about it through the team channel.

### `How to contribute`

In order to contribute to the project, first of all contact the project manager, or administrator inorder to add you to the repository. Then follow the following steps;

1. Clone the repository.

2. Install all the dependencies (`npm install` or `npm i`)

3. Run the project using `npm start` command

4. Study the code structure and file structure

5. Request for a task

6. Create your branch **(following the branch naming convention)** and start contributing

_**It is important to know that before you code is committed, a couple of script will be run to ensure that the different standards and rules were respected**_

### `Commit Format`

In order to ensure uniformality in the repository, `CommitLint` is used to ensure that the commit message is clear and descriptive enough to know what you were working on.

You commit message should have the following format:
**type(scope?): subject**

Here are the different types your work might fall inside

**[
"build", "chore", "ci","merge","docs", "improvement", "feat", "fix", "perf", "refactor", "revert", "style", "test"
]**

Here are the different scopes you can use **(it's important to know that the scope is depended on what you are actually worked on)**

**[
app, component, template, sitemap, api, documentation etc...
]**

**Example:** I just worked on building the navigation bar of the platform, and I tested everything and it's pretty good. Time for me to commit the changes and push to my branch. Here are the possible commit messages form I could have written:

-  `git commit -m "completed the navigation bar"` :x:

`Reason: type must be defined`

-  `git commit -m "feat(components): completed the navigation bar"` :white_check_mark:
-  `git commit -m "feat(): completed the navigation bar"` :white_check_mark:
-  `git commit -m "feat(components): Completed the navigation bar"` :x: [No capitalization, underscore, camelcase in the subject]

_It's also important to keep in mind that the use of descriptive and clean English in writing your commit message is necessary and highly recommended_

### `Branch Naming`

As much as it's important to follow rules in programming and commit messages writing. Following the naming convention of the branch is very important.

All through this project, you will be using a branch for each feature you will be working on, so it's important to name your branch appropriately.

Here is the format to name the branch you are working on: **`KT-app_[type]-(name_of_branch)`**

**Example:** Before working on the navigation bar, you should have created a new branch from the main branch, here is the format: **`KT-app_feat-navbar`**

**Note: Please ensure to go through the project, study the file structure, code structure, and programming style as this is document doesn't explicitly gives you all the details you might need to work appriopriately.**

**In case you have any blockage, please reach out to your respective mentor for assistances. Or you can reach the project lead and you doubt will be hopefully sorted out.**

<br/>

**Happy Hacking :sunglasses::v:**
