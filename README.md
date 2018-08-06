<!-- HEADING -->

<p align="center">
  <img src="./src/images/avatarmoon.png" width="60">
</p>
<h1 align="center">️
  spacestone
</h1>

<!-- DESCRIPTION -->

<h3 align="center">
  ☄️
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

- **Customizability.** Within the "src" folder, all adaptable files to be made by the user are available. One can even go further to possibly add in aesthetic javascript node packages to add visuals.

- **Hosted with Netlify.** Don't get me wrong, GitHub Pages offers great utility for first timers, but as I experienced more with web hosts, I needed something more reliable and easier to use. Netlify offers both web-based and command-line interfaces in order to adapt to an extremely easy and intuitive user interface dependent on the user.

<!-- INSTALLATION -->

## 🚀 Putting this in the Infinity Gauntlet (Installation)

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

3.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`. Open the `YOU_PICK_NAME` directory in your code editor of choice and edit `src/`. Save your changes and the browser will update in real time!

4. **Push to your Git repository**

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

5. **Create an account with Netlify and follow the steps**

    I would put the steps here, but Netlify does such a good job guiding people, there's no need to. Simply go on their website, make an account, link up your GitHub, and choose accordingly. 
    
    If it prompts for `build command` and `build location`, but doesn't fill it in automatically, put in `gatsby build` and `public/` respectively.

At this point, you’ve got a fully functional Gatsby website that anyone can access via Netlify. Any questions? Put an issue onto the repo and we'll sort it out!

<!-- LICENSE -->

## [License](LICENSE)

The code in this project is licensed under MIT license.