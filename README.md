# 💻 Web Developer Portfolio

## A modern, clean, & simple to navigate portfolio template for web developers (or any developer)!

### Includes Pertinent Sections to any portfolio:
📄 About
📄 Experience
📄 Projects / Work
📄 Contact

To add your own info into the template just alter the `src/portfolio.js` file variables. More customization options will come & be incorporated in the future 🔮.

If you have any suggestions on what else you want to be customized through the `portfolio.js` file or added / changed in general please feel free to reach out through the hosted page [contact form](https://forms.gle/vhWrKD32i1d2MSZGA) or leave an issue.

If you would like to contribute to the project take a look at the [Issues](https://github.com/feifyKike/webdev_portfolio/issues).

Want to add a personal touch to the portfolio? Feel free to open a [pull request](https://github.com/feifyKike/webdev_portfolio/pulls).

🙏 ** I would greately appreciate if you give me proper credit if you do decided to use this portfolio for any of your purposes. Just leaving the footer as is at the bottom of the template *Designed & Created by Maxim Shelepov* would be enough. Thank you.**

## Table of Contents
- [Getting Started](#getting-started)
- [How to Use](#how-to-use)
- [Customizing Sections](#customizing-sections)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)
- [Future](#future)

## Getting Started

These intructions will help you get the project up and running on your local machine for your development and use.

You will need to install [Git](https://github.com/git-guides/install-git), [Node.js](https://github.com/git-guides/install-git), & [npm](https://www.npmjs.com/package/npm) (which usually comes pre-installed with the latest version of Node.js but if not...)

### Install necessary project required packages

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

## How to Use

From the command line, clone the repository run the project.
```sh
# Clone the repository
git clone https://github.com/feifyKike/webdev_portfolio.git

# Change into the repository within your current directory
cd webdev_portfolio

# install packages - last step
npm install

# Start the vite development server
npm run dev

# Open up the localhost server in your prefered browser

```

## Customizing Sections

To personalize the template to your content and profile change the `src/portfolio.js` file contents. You will also need to change the `index.html` `<title></title>` tag which will display your name in the browser tab. And also don't forget to add your own favicon.ico and favicon.png in the `public` folder.

```javascript

const greeting = {
    intro: "...",
    message: "...",
    basedLocation: "...",
    resumeLink: "...",
    logoAbsoluteLink: "...",
    portraitAbsoluteLink: "..."
}

const about = { ... }

const experiences = { ... }

const works = { ... }

// ...

```

## Deployment

Firstly, prepare your project for production by running:

```sh
# minify and prepare project for production
npm run build

```

### To deploy on Github Pages
- Add your cloned repository to github.
- Go to the settings page of the github repo and change the source to point to the branch of the repo you want to publish (usually main or master), hit save.
- Good Luck!

## Technologies Used
- [Vue](https://vuejs.org)
- [Vite.js](https://vitejs.dev)
- [Tailwind.css](https://tailwindcss.com)

## Future
Hope to continue improving the site, as well as adding more components and layout options in the `src/components` folder.

** Future Improvement Direction: **
- Add more layout components to `src/components`.
- More color scheme styling options in `src/portfolio.js`.
- More text and image styling control in `src/portfolio.js`.

💡 Leave your own ideas in the [issues](https://github.com/feifyKike/webdev_portfolio/issues) section or complete my [contact form](https://forms.gle/vhWrKD32i1d2MSZGA)

Again if you would like to contribute feel free to open a [pull request](https://github.com/feifyKike/webdev_portfolio/pulls))