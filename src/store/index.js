import { createStore, combineReducers, applyMiddleware } from 'redux';
// const logger = () => {
//     return (next) => (action) => {
//         const returnValue = next(action);
//         return returnValue
//     }
// }
// const thunk = ({ getState, dispatch }) => {
//     return (next) => (action) => {
//         if (typeof action === 'function') {
//             return action(getState, dispatch)
//         }
//         return next(action)
//     }
// }
import thunk from 'redux-thunk';
import dome from './dome/reduce'
import logger from 'redux-logger'
// import createStore from '../components/my-redux'
// import applyMiddleware from '../components/my-redux/applyMiddleware'
let store = createStore(combineReducers({ dome: dome }), applyMiddleware(thunk,logger))
// console.log(store.getState());

// let newStore = createStore(dome, applyMiddleware(thunk, logger))
export default store

