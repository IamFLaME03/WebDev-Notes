import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
   content: {
      type: String,
      required: true,
   },
   complete: {
      type: Boolean,
      default: false,
   },
   createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users"   // make sure it should be same that you given in first parameter of mongoose.model
   },
   subTodos: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "SubTodo"
      }
   ],
}, {timestamps:true})

export const Todo = mongoose.model("Todo", todoSchema)