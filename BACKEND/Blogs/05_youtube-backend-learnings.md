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
