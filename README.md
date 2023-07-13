# 💻 Web Developer Portfolio ![Last Commit](https://img.shields.io/github/last-commit/feifykike/webdev_portfolio?color=blueviolet) ![Commit Activity](https://img.shields.io/github/commit-activity/m/feifykike/webdev_portfolio?color=blueviolet) [![License](https://img.shields.io/github/license/feifykike/webdev_portfolio?color=blueviolet)](https://github.com/feifyKike/webdev_portfolio/blob/main/LICENSE)

## A modern, clean, & simple to navigate portfolio template for web developers (or any developer)!

### Includes Pertinent Sections for any Web Developer Portfolio:
✅ Name & Introduction\
✅ About\
✅ Experience\
✅ Projects / Work\
✅ Contact

To add your own info into the template just alter the `src/portfolio.js` file variables. More customization options will come & be incorporated in the future 🔮.

If you have any suggestions on what else you want to be customized through the `portfolio.js` file or added / changed in general please feel free to reach out through the hosted page [contact form](https://forms.gle/vhWrKD32i1d2MSZGA) or leave an issue.

If you would like to contribute to the project take a look at the [Issues](https://github.com/feifyKike/webdev_portfolio/issues).

Want to add a personal touch to the portfolio? Feel free to open a [pull request](https://github.com/feifyKike/webdev_portfolio/pulls).

🙏 I would greatly appreciate proper credit if you do decided to use this portfolio for any of your purposes. Just leaving the footer as is at the bottom of the template **Designed & Created by Maxim Shelepov** would be enough. Thanks.

⭐️ Also leave a star if you would like to see the project further develop and be improved.

## Table of Contents
- [Getting Started](#getting-started)
- [How to Use](#how-to-use)
- [Customizing Content](#customizing-content)
- [Deployment](#deployment)
- [Technologies Used](#technologies-used)
- [Images and Icons](#images-and-icons)
- [Future](#future)
- [License](#license)

Check out the [live demo](https://feifykike.github.io/webdev_portfolio/) of the project

## Getting Started

These instructions will help you get the project up and running on your local machine for your development, testing, & eventual deployment. Run all of the commands below in your chosen terminal.

⚡️ **A speedier but less future customizable alternative** would be to [fork this repository](https://docs.github.com/en/get-started/quickstart/fork-a-repo) and then make your updates to the `portfolio.js` file via Github and then committing your changes which will automatically trigger a build process. Check step #2 of [deploy to Github Pages](#To-deploy-on-Github-Pages) for further instructions.

### Preparatory setup
You will need to install [Git](https://github.com/git-guides/install-git), [Node.js](https://nodejs.org/en/download), & [npm](https://www.npmjs.com/package/npm).

Using [brew](https://brew.sh) is recommended for mac users.

### Clone the repository
Using the installed global packages from the previous step...
```sh
# Copy this remote repository to your current directory (folder)
git clone https://github.com/feifyKike/webdev_portfolio.git

# Change into the project folder within your current directory
cd webdev_portfolio
```

### Install necessary project required packages
```sh
npm install
```

## How to Use
Once all is set up, you can start developing by running the vite server and viewing the site from your browser.
### Compile and Hot-Reload for Development
```sh
npm run dev

# a localhost:####/webdev_portfolio link should appear -> paste into your browser and view
```

### Make commits and push them to your remote repository
```sh
git remote add origin https://github.com/YOUR_GITHUB_USERNMAE/webdev_portfolio.git # set a remote repo for git to point to
git remote -v # shows the set remote

git add . # add all the changes to the stage
git status # shows all the staged changes

git commit -m "Updating portfolio.js content."
git push
```
🎉 Now watch and enjoy as the latest commit appears in your remote repo and the automatic deployment begins. For deployment, check out the [Deployment](#deployment) section.

## Customizing Content

To personalize the template site to your content you can:
1. Populate your own information, appearance settings, & site behavioral setting in [src/portfolio.js](src/portfolio.js).
2. Change the [index.html](index.html) `<title></title>` tag to whatever text you want others to see in the browser tab (ex: name, title, etc.).
3. Add your own `favicon.ico` and `favicon.png` in the `public/` folder or **feel free to use the current emoji favicon** (the icon that will appear in the browser tab next to the title).
4. Optional: Use different global font for the site. You can choose one from [google fonts](https://fonts.google.com) and then replace the import link in the [main.css](src/assets/main.css) file.

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
1. Add your cloned repository to github.
    - [Set remote repository](https://docs.github.com/en/get-started/using-git/pushing-commits-to-a-remote-repository#remotes-and-forks) for git to point to & [push commits to remote](https://docs.github.com/en/get-started/using-git/pushing-commits-to-a-remote-repository#about-git-push)
2. The github workflow `deploy.yml` file should automatically start the build process for deployment to your github pages url: `https://<GITHUB_USERNAME>.github.io/<REPO_NAME>`
    - For confirmation that the build succeeded take a look at the status (check or X) near the latest commit.
    - If permission errors take a look at the settings page and give the github actions permission to **read & write**.
3. Enjoy & Good Luck!

## Technologies Used
- [Vue.js](https://vuejs.org)
- [Vite.js](https://vitejs.dev)
- [Tailwind.css](https://tailwindcss.com)

## Images and Icons
The images in the [src/assets/images/](https://github.com/feifyKike/webdev_portfolio/tree/main/src/assets/images) project folder are meant to serve as placeholders for your own images. Please intend to replace them with your own image assets.

The project comes pre-equipped with:
- [heroicons](https://heroicons.com) - Offer nice general-purpose icons. 2 icons used in the menu dropdown and 1 link icon for projects.
    ```html
    <template>
        <Bars2Icon class="h-5 w-5 text-blue-500"/> <!-- insert into html like so as a tag -->
    </template>
    <script setup>
    import { Bars2Icon } from '@heroicons/vue/24/solid'
    <script>
    ```
- [fontawesome-icons](https://fontawesome.com) - Using the [font-awesome-brand-icons](https://fontawesome.com/search?o=r&m=free&f=brands). 4 used for social media links.
    ```html
    <template>
        <font-awesome-icon icon="fa-brands fa-icon_name_here"></font-awesome-icon>
    </template>
    ```
    More instructions on adding these icons to your templates can be found here in the [icons.js](./src/icons.js) file.

🔭 Take look at [heroicons basic usage](https://github.com/tailwindlabs/heroicons) & [adding icons with fontawesome tutorial](https://fontawesome.com/docs/web/use-with/vue/add-icons) for more details.

ℹ️ All brand icons are trademarks of their respective owners. Do not use brand logos for any purpose except
to represent the company, product, or service to which they refer.

## Future
Hope to continue improving the site, as well as adding more components and layout options in the `src/components` folder.

**Planned Future Improvements:**
- [ ] Add more layout components to `src/components`.
- [ ] More color scheme styling options in `src/portfolio.js`.
- [ ] More text and animation styling control in `src/portfolio.js`.

... and more

💡 Leave your own ideas in the [issues](https://github.com/feifyKike/webdev_portfolio/issues) section or complete my [contact form](https://forms.gle/vhWrKD32i1d2MSZGA).

🛠️ Again if you would like to contribute feel free to open a [pull request](https://github.com/feifyKike/webdev_portfolio/pulls).

🏎️ The project was initially designed in Figma. Check out the [Figma Design here](https://www.figma.com/file/GV3bfT7q5lxLnQFBj8VWra/Web-Dev-Portfolio-2.0).

## License
The project is licensed under the MIT license. Check out the [LICENSE.md](https://github.com/feifyKike/webdev_portfolio/blob/main/LICENSE) file for more details.

📖 In short, it's open sourced and free to use for your own purposes. However there are some quirks, so please check out the [Images and Icons](#images-and-icons) section.