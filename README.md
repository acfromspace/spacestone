<!-- HEADING -->

<p align="center">
  <img src="./src/images/avatarmoon.png" width="60">
</p>
<h1 align="center">️
  spacestone
</h1>

<!-- DESCRIPTION -->

<h3 align="center">
  <span role="img" aria-label="Comet">☄️</span>
</h3>
<p align="center">
  <strong>Personal portal to realms of the cosmos.</strong><br>
  Created with Gatsby in order to showcase my social links and web dev.
</p>

<!-- INFORMATION (Shields:IO) -->

[![GitHub](https://img.shields.io/github/license/mashape/apistatus.svg)](https://github.com/acfromspace/spacestone/blob/master/LICENSE) ![Location](https://img.shields.io/badge/location-compromised%20by%20Thanos-red.svg)

<!-- FEATURES -->

*spacestone* is an entry portal website with the following features:

- **Blazing fast loading thanks to Gatsby.** Get all the benefits of static websites with none of the limitations. Gatsby sites are fully functional React apps, so you can create high-quality, dynamic web apps, from blogs to ecommerce sites to user dashboards.

- **Customizability.** Within the "src" folder, all adaptable files to be made by the user are available. Sass files are included to further the customize the styling. One can even go further to possibly add in aesthetic javascript node packages to add visuals.

- **Hosted with Netlify.** Don't get me wrong, GitHub Pages offers great utility for first timers, but as I experienced more with web hosts, I needed something more reliable and easier to use. Netlify offers both web-based and command-line interfaces in order to adapt to an extremely easy and intuitive user interface dependent on the user.

<!-- QUICK INSTALLATION -->

## <span role="img" aria-label="Sparkles">✨</span> "Snappy" Installation (Quick Installation)

- Ensure Gatsby is installed on your machine `npm install --global gatsby-cli`
- Clone the repo `gatsby new YOU_PICK_NAME https://github.com/acfromspace/spacestone`
- Change directory `cd YOU_PICK_NAME`
- Install node packages `npm install`
- Serve it locally `gatsby develop`
- Go to `http://localhost:8000`

<!-- IN-DEPTH INSTALLATION -->

## <span role="img" aria-label="Rocket">🚀</span> Putting this in the Infinity Gauntlet (In-Depth Installation)

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

5.  **Create an account with Netlify and follow the steps**

    I would put the steps here, but Netlify does such a good job guiding people, there's no need to. Simply go on their website, make an account, link up your GitHub, and choose accordingly.
    
    If it prompts for `build command` and `build location`, but doesn't fill it in automatically, put in `gatsby build` and `public` respectively.

    To have a demonstration of how easy it is, click on this the button below. 
    
    (Note this will create the website based off of *my version*, so if you have any edits, follow the original steps, this is merely for demo purposes or for those who want a quick start.)

    <!-- NETLIFY BUTTON -->
    [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/acfromspace/spacestone)


**Note:** Google Analytics is used for this project. To use it, create an account with Google Analytics and receive a key. Then create a `.env` file at the root of your project with `GOOGLE_ANALYTICS_ID=YOUR_ID_HERE`. This will then track users who visit your website. If you wish not to use Google Analytics, simply comment out the section in `gatsby-config.js`.

At this point, you’ve got a fully functional Gatsby website that anyone can access via Netlify. 

Any questions? Put an issue onto the repo and we'll sort it out!

<!-- WHAT'S INSIDE? -->

## <span role="img" aria-label="Thinking Face">🤔</span> What's inside?

A quick look at the top-level files and directories you'll see in this Gatsby project.

       .
    1  ├── node_modules
    2  ├── src
    3  ├── static
    4  ├── .babelrc
    5  ├── .gitignore
    6  ├── .prettierrc
    7  ├── .travis.yml
    8  ├── gatsby-config.js
    9  ├── gatsby-node.js
    10 ├── LICENSE
    11 ├── package-lock.json
    12 ├── package.json
    13 └── README.md

  1.  **`/node_modules`**: The directory where all of the modules of  code that your project depends on (npm packages) are automatically installed.  
  
  2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser), like your site header, or a page template. “Src” is a convention for “source code”.

  3. **`/static`**: The directory where HTML dependencies lie. Normally the `favicon.ico` (the image next to the title in the browser tab), goes here.

  4.  **`.babelrc`**: This file enables to write modern JavaScript that will be "transpiled" to widely-supported Javascript. Think of it as a language translator for all devices that will see your website.
  
  5.  **`.gitignore`**: This file tells git which files it should not track nor maintain a version history for. For instance, you shouldn't let anyone get your `.env` files (These usually contain your password and such to speak with APIs).
  
  6.  **`.prettierrc`**: This is a configuration file for a tool called [Prettier](https://prettier.io/), which is a tool to help keep the formatting of your code consistent.
  
  7.  **`.travis.yml`**: This file runs your program's tests every time you commit to GitHub. Point of this is discover right away if a commit broke something and to fix it before it becomes a problem. Imagine snapping the gauntlet if you didn't have all 6 stones! This warns you before creating poor decisions.
  
  8.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://next.gatsbyjs.org/docs/gatsby-config/) for more detail).
  
  9.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby node APIs](https://next.gatsbyjs.org/docs/node-apis/) (if any). These allow customizations of default Gatsby settings affecting pieces of the site build process. This project contains none, but the file remains if one wishes to build blog posts or of the sort.
  
  10.  **`LICENSE`**: This project is licensed under the MIT license.
  
  11.  **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. (You won’t change this file directly).
  
  12.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.
  
  13.  **`README.md`**: A text file containing useful reference information about your project. The one you're reading right now!

<!-- LICENSE -->

## [License](LICENSE)

The code in this project is licensed under MIT license.
