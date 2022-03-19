import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import { itemReducer } from './item.reducer.js';
// import { userReducer } from './user.reducer.js';
const rootReducer = combineReducers({
  itemModule: itemReducer,
  // userModule: userReducer,
});
export default createStore(rootReducer, applyMiddleware(thunk));
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
