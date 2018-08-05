# acfromspace.github.io
> Personal portal to realms of the cosmos.

Contains the spacestone.

## Developer Notes

```
# Install the Gatsby CLI tool globally on your machine
npm install --global gatsby-cli

# Create a new "github.io" repo
(This will be in Github, create new repo YOUR_USERNAME.github.io)

# Initialize the repo in the space you want your workspace to be
(I use GitKraken (Git GUI), so I sign in to GitHub through GitKraken)

# Clone empty repo to desired workspace
(I usually clone repo to the desktop for easy access)

# Create TWO separate branches (IMPORTANT!)
(I do this in GitKraken) Make 1 branch master and leave it be, make another your dev-build area.

# Dev on the OTHER branch, not MASTER
(I also do this in GitKraken)

# Clone in the workspace in your favorite text editor
gatsby new SITE_NAME https://github.com/acfromspace/acfromspace.github.io

# Change directory to your SITE_NAME
cd SITE_NAME

# Update packages
npm update | yarn (sometimes need to manually install packages)

# Make sure to install gh-pages
npm install gh-pages --save-dev | yarn add --dev gh-pages

# Include script in the package.json file
"deploy": "gatsby build && gh-pages -d public -b master"

# To dev on your side
gatsby develop

# To deploy to github.io
npm run deploy | yarn deploy

# What now?
Enjoy deving!
```

## [License](LICENSE)

The code in this project is licensed under MIT license.