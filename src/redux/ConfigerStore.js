import {createStore, combineReducers,applyMiddleware } from "redux";
import {persistReducer,FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER,} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from "redux-thunk";
import logger from "redux-logger"
// import { User } from "./User";
import {category} from "./Category"
import {Item} from "./Item"
import {selectedItem} from "./SelectedItem"
import { comments } from "./Comments";
import { bill } from "./Bill";
const persistConfig = {
   key: 'counter',
   storage,
};
   const  reducers= combineReducers({
      // User:User,
      category:category,
      Item,
      selectedItem,
      comments,
      bill
   })
   const persistedReducer = persistReducer(persistConfig, reducers);
   const middlewareEnhancer = applyMiddleware(thunk, logger)

 const store = createStore(persistedReducer,middlewareEnhancer)
 export default store;