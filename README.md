<!-- PROJECT LOGO -->
<br />
<div align="center">

  <h3 align="center">TailwindCSS/DaisyUI for EJS</h3>

</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Template</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE TEMPLATE -->
## About The Template

This is a skeletonal structure for a todo app to mainly focus on implementing TailwindCSS and DaisyUI to connect with your Views EJS. Everything else can be changed to fit your need for your app.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

This section should list any major frameworks/libraries used to bootstrap your project. Leave any add-ons/plugins for the acknowledgements section. Here are a few examples.

* EJS
* TailWind
* DaisyUI
* JavaScript
* Node.js
* Mongooose

## Packages/Dependencies used 

bcrypt, connect-mongo, dotenv, ejs, express, express-flash, express-session, mongodb, mongoose, morgan, nodemon, passport, passport-local, validator, daisyui

devDependencies:
autoprefixer, postcss, postcss-import, tailwindcss, nodemon

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- GETTING STARTED -->
## Getting Started

Fork the repo, clone and begin your coding!

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. For the Repo
2. Clone the repo
   ```sh
   git clone https://github.com/HondaChan14/TailwindCSS-DaisyUI-EJS-Template.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your DB_STRING in `.env`
   ```js
   const DB_STRING = 'ENTER YOUR MONGODB CONNECTION STRING';
   const PORT = 'ENTER YOUR LOCALHOST PORT NUMBER'; EX: 2121
   ```
5. Followed the install instructions steps 1  from here: https://tailwindcss.com/docs/installation/using-postcss

  A. Create your [postcss.config.js] file. Some reason it isn't made when installing postcss

  B. Then copy paste the 2nd Step box to [postcss.config.js]

  C. Then for ejs, you add to your contents section in your [tailwind.config.js]:
       "./views/**/*.ejs"

  D.  copy paste the fourth box into your style.css
      Then set up the main style.css in a src folder. (This is where you will add your CSS)
      
  E.  Then you go to your package.json and use this for the script
      "build-css": "tailwindcss -i src/style.css -o public/style.css --watch"
      (Doing this will link your src/style.css and create a public/style.css with TailwindCSS elements autocreated )
      Basically the Nodemon of Tailwind/DaisyUI. Watch at the end means that you only have to run it the one time and then every time you save a file it rebuilds the CSS and you don't have to keep restarting it

8.Run Both Nodemon and TailwindCSS-DaisyUI

```js
npm run dev in one Terminal for Nodemon
```
```js
npm run build-css in another Terminal to see TailwindCSS/DaisyUI updates
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Jason Jugo Aka Honda - [@HondaCivicChan](https://twitter.com/HondaCivicChan)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Special Tribute and Thanks to Hattie Tavares👒🍵 https://github.com/HattieTavares

<p align="right">(<a href="#readme-top">back to top</a>)</p>