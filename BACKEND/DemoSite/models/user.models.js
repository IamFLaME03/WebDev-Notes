import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
   
   {
      // username: String   --> it is true but for validations we use to write...
      username: {
         type: String,
         required: true,
         unique: true,
         lowercase: true
      },
      email: {
         type: String,
         required: true,
         unique: true,
         lowercase: true
      },
      password: {
         type: String,
         required: true,
      }
   },
   {timestamps: true}
)

export const User = mongoose.model("User", userSchema)
//here we given name User, but in mongoDB it converts into users(lowercase + plural)