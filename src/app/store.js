import { configureStore } from '@reduxjs/toolkit'
import { homeReducer} from '../data/home/homeSlice'
/* 
store = {
  home: [
    {
      id:
      title:
      image:
      username:
      votes:
      postAgeInHours:
      numberOfComments:
    },
  ],
  askReddit: [],
  funny: [],
  antiwork: [],
  facepalm: []
}
*/
export const store = configureStore({
  reducer: {
    home: homeReducer,
    askReddit: null,
    funny: null,
    antiwork: null,
    facepalm: null
  }
})
console.log('yo')