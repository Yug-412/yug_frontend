import { configureStore } from "@reduxjs/toolkit";
import  counterSlice  from "./counter/counterSlice";
import  todoSlice  from "./Todo/todoslice";



export default configureStore({
  reducer: {
    counter: counterSlice,
    todo: todoSlice
  },
});
