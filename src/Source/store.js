import { configureStore } from '@reduxjs/toolkit'
import counterReduser from  "../Source/Slices/counterSlice";


export const store= configureStore({
  reducer: {
    counter: counterReduser,
  },
});


export default store;