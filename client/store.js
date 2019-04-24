import {createStore, applyMiddleware, combineReducers} from 'redux'
import loggerMiddleware from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import axios from 'axios'

//action type
const SET_USER = 'SET_USER'

//action creators
const setUser = (user) => {
  return {
    type: SET_USER,
    user
  }
}

//reducers
const userReducer = (state = { }, action) => {
  switch (action.type) {
    case SET_USER: 
      return action.user
    default:
      return state
  }
}

const reducer = combineReducers({
  user: userReducer
});

//thunks

export const loginThunk = (user) => {
  return (dispatch) => {
    axios.post('/auth', user)
      .then(userResponse => dispatch(setUser(userResponse.data)))
      .catch((err) => console.log(err))
  }
}

// export const sessionLogin = (user) => {
//   return (dispatch) => {
//     axios.get('/auth', user)
//       .then(userResponse => dispatch(setUser(userResponse.data)))
//       .catch((error) => console.log(error)) 
//   }
// }

export const logoutThunk = () => {
  return (dispatch) => {
    axios.delete('/auth')
      .then(() => dispatch(setUser({})))
      .catch((err) => console.log(err))
  }
}

export default createStore(reducer, applyMiddleware(thunkMiddleware, loggerMiddleware))
