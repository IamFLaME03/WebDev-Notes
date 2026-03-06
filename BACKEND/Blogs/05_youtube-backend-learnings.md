# Learning Concepts

This file contains concepts, points that i learned while building youtube-backend project from chaiaurcode yt channel.

## [How to setup professional backend project](https://youtu.be/9B4CvtzXRpc?si=qCptsK8RANoudvoM)

- **Image/file Storing** : When we use any third party service like azure,aws or cloudinary, we use to store files/photos temporary store on our server, for in case if connection lost we have that files and later post them on third party service by using third process.(Some organisation use to directly upload, So it depends on organisation)

- We can not push empty folder on git, but it is important for us to track and push these folders. There is standard approach we follows to create a empty file `.gitkeep` inside the folder

> gitignore generator : https://mrkandreev.name/snippets/gitignore-generator/

- **Use to install prettier package** because when we write professional grade code, we will write code along with other developers and may be someone have not prettier VS code extension. So when we merge everything on github, there are so many conflicts. Thats why it is important for the team to be on the same page. Not just a extension, the settings of prettier also have to be added on a basis of project.

   - after installing prettier package, there are some files we have to add manually.
   
   ```js
      // .prettierrc
      {
         "singleQuote": false,
         "bracketSpacing": true,
         "tabWidth": 2,
         "trailingComma": "es5",
         "semi": true
      }

      // .prettierignore
      /.vscode 
      /node_modules
      ./dist

      *.env
      .env
      .env*
   ```

## [How to connect database in MERN](https://youtu.be/w4z8Py-UoNk?si=784Qivqlsy4A0eGd)

- we stores confidential and sensitive info in `.env` and other thing like DB name, port in `constants.js` file

- There are two approach for connecting DB. 
   1. All connection code fuction inside `index.js` file adn call there.
   2. All code inside separate file `db/` and export it to `index.js` and run it

- **Note that** Database is always in another continent means it takes time and second point is there are chances to face failures or error while working with DB

   *"So always use try-catch or use promise (hadles error by resolve-reject) and use async-await"*

- When professionals write IIFE(Immediately Invoked Function Expression), they use semicolon before it for cleaning purpose if editor missed semicolon in previous line.

   ```js
   ;( async () => {} )()
   ```

## [Custom API response and Error handling](https://youtu.be/S5EpsMjel-M?si=xB17NpY1rz_ABIg8)

