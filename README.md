<!-- HEADING -->

<p align="center">
  <img src="./src/images/avatarmoon.png" width="60">
</p>
<h1 align="center">️spacestone</h1>

<!-- DESCRIPTION -->

<h3 align="center">
  <span role="img" aria-label="Comet">☄️</span>
</h3>
<p align="center">
  <strong>Personal portal to realms of the cosmos.</strong><br>
  Created with <a href="https://www.gatsbyjs.org/" target="_blank">Gatsby.js</a> in order to showcase my social links and web dev.
</p>

<!-- INFORMATION (Shields:IO) -->

<p align="center">
    <a href="https://github.com/acfromspace/spacestone/blob/master/LICENSE">
        <img src="https://img.shields.io/github/license/mashape/apistatus.svg"
            alt="License: MIT"></a>
    <img src="https://img.shields.io/badge/location-compromised%20by%20Thanos-red.svg"
            alt="Location: Compromised by Thanos">
    <a href="https://twitter.com/intent/follow?screen_name=acfromspace">
        <img src="https://img.shields.io/twitter/follow/acfromspace.svg?style=social&logo=twitter"
            alt="Follow @acfromspace"></a>
</p>

<!-- FEATURES (Gif goes right below) -->

<p align="center">
  <img src="./static/demo.gif">
</p>

[*spacestone*](https://spacestone.netlify.com) is an entry portal website with the following features:

- **Blazing fast loading thanks to [Gatsby](https://www.gatsbyjs.org/).** Get all the benefits of static websites with none of the limitations. Gatsby sites are fully functional React apps, so you can create high-quality, dynamic web apps, from blogs to ecommerce sites to user dashboards.

- **Customizability.** Within the "src" folder, all adaptable files to be made by the user are available. [Sass](https://sass-lang.com/) files are included to further the customize the styling. One can even go further to possibly add in aesthetic javascript node packages to add visuals.

- **Hosted with [Netlify](https://www.netlify.com/).** Don't get me wrong, GitHub Pages offers great utility for first timers, but as I experienced more with web hosts, I needed something more reliable and easier to use. Netlify offers both web-based and command-line interfaces in order to adapt to an extremely easy and intuitive user interface dependent on the user.

<!-- QUICK INSTALLATION -->

## <span role="img" aria-label="Sparkles">✨</span> "Snappy" Installation (Quick Installation)

- Ensure Gatsby is installed on your machine `npm install --global gatsby-cli`
- Clone the repo `gatsby new YOU_PICK_NAME https://github.com/acfromspace/spacestone`
- Change directory `cd YOU_PICK_NAME`
- Install node packages `npm install`
- Serve it locally `gatsby develop`
- Go to `http://localhost:8000`

<!-- IN-DEPTH GUIDE -->

## <span role="img" aria-label="Rocket">🚀</span> Putting this in the Infinity Gauntlet (In-Depth Guide)

You can get a new Gatsby site up and running on your local dev environment as soon as possible.

1.  **Create a Gatsby copy.**

    <!-- ```sh means shell code syntax -->

    Choose your favorite text editor (I use Visual Studio Code) and activate the terminal (or just use the terminal itself). Navigate to an area where you would like to put the repository (the files), normally I choose my Desktop or a designated folder.

    ```sh
    # install the Gatsby CLI globally so your computer knows what Gatsby is
    npm install --global gatsby-cli

    # create a new Gatsby site using the 'spacestone'
    gatsby new YOU_PICK_NAME https://github.com/acfromspace/spacestone
    ```

2.  **Start the site in `develop` mode.**

    Next, move into your new site’s directory and start it up:

    ```sh
    # changes directory
    cd YOU_PICK_NAME

    # make sure to update packages and meet system requirements
    npm install (or) yarn

    # Gatsby command to create a live server on your end
    gatsby develop
    ```
    
    **Note:** Performing `gatsby develop` will create `.cache` and `public` folders which help run the website on your local server. These will not be pushed to the repo online, but locally on your own machine.

3.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`. Open the `YOU_PICK_NAME` directory in your code editor of choice and edit `src`. Save your changes and the browser will update in real time!

4.  **Push to your Git repository**

    ```sh
    # Create a new repo on Github and name it accordingly
    Github.com > New repository > Create repository

    # Return to the terminal and use this command to cancel the live server
    CTRL + C (You should see the directory afterwards ../YOU_PICK_NAME>)

    # Initialize, add files, commit, add origin, and push to the repo
    git init
    git add .
    git commit -m "first commit"
    git remote add origin YOUR_REPO_URL_HERE
    git push -u origin master
    ```

5.  **Create an account with [Netlify](https://www.netlify.com/) and follow the steps**

    I would put the steps here, but Netlify does such a good job guiding people, there's no need to. Simply go on their website, make an account, link up your GitHub, and choose accordingly.
    
    If it prompts for `build command` and `build location`, but doesn't fill it in automatically, put in `gatsby build` and `public` respectively.

    To have a demonstration of how easy it is, click on this the button below. 
    
    (Note this will create the website based off of *my version*, so if you have any edits, follow the original steps, this is merely for demo purposes or for those who want a quick start.)

    <!-- NETLIFY BUTTON -->
    [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/acfromspace/spacestone)

    For external services (look at the next topic below), Netlify has a section for you to input your `.env` variables on the dashboard!

    At this point, you’ve got a fully functional Gatsby website that anyone can access via Netlify. 

    Any questions? Put an issue onto the repo and we'll sort it out!

<!-- EXTERNAL SERVICES -->

## <span role="img" aria-label="Doggo">🐕</span> Fetch information doggo! (External Services)

The project uses external services. To use them you have to secure some access data. All services are free to use or have generous free tiers big enough for a personal project.

Create an `.env` file like below in the root folder. Change `...` placeholders with your own key.

```text
GOOGLE_ANALYTICS_ID=...
```

If you wish not to use external services, simply comment out the respective sections in `gatsby-config.js`.

<!-- WHAT'S INSIDE? -->

## <span role="img" aria-label="Thinking Face">🤔</span> What's inside?

A quick look at the top-level files and directories you'll see in this project.

```
   .
1  ├── node_modules/
2  ├── public/
3  ├── src/
4  ├── static/
5  ├── .babelrc
6  ├── .gitignore
7  ├── .prettierrc
8  ├── .travis.yml
9  ├── gatsby-config.js
10 ├── gatsby-node.js
11 ├── LICENSE
12 ├── package-lock.json
13 ├── package.json
14 └── README.md
```

1. **`node_modules/`**: Location where [Node.js](https://nodejs.org/en/) packages are installed via [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/en/).
2. **`public/`**: What is distributed to the viewing software so everyone can see your greatest creation!
3. **`src/`**: All development usually occurs here. “src” is a convention for “source code”.
4. **`static/`**: HTML dependencies.
5. **`.babelrc`**: This file enables to write modern JavaScript that will be "transpiled" to widely-supported Javascript. Think of it as a language translator for all devices that will see your website.
6. **`.gitignore`**: This file tells `.git` which files it should not track nor maintain a version history for. For instance, you shouldn't let anyone get your `.env` files. (These usually contain your API keys)
7. **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/), a tool to help keep the formatting of your code consistent.
8. **`.travis.yml`**: This file runs your program's tests every time you commit to GitHub. Point of this is discover right away if a commit broke something and to fix it before it becomes a problem.
9. **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://next.gatsbyjs.org/docs/gatsby-config/) for more details).
10. **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://next.gatsbyjs.org/docs/node-apis/) (if any). These allow customizations of default Gatsby settings affecting pieces of the site build process.
11. **`LICENSE`**: An open source license that protects contributors and users depending on the license chosen.
12. **`package-lock.json`** This is an automatically generated file based on the exact versions of your package manager dependencies that were installed for your project. (You won’t change this file directly)
13. **`package.json`**: A manifest file for [Node.js](https://nodejs.org/en/) projects, which includes metadata (the project’s name, author, package names, etc.). This manifest is how [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/en/) knows which packages to install for your project.
14. **`README.md`**: A markdown file containing useful reference information about your project. The file you're reading right now!

<!-- LICENSE -->

## <span role="img" aria-label="Oncoming Police Car">🚔</span> [License](LICENSE)

The code in this project is under a specific open source license.
