import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { newsListReducer } from "./reducers/newsReducer"
import { filterListReducer } from "./reducers/filterReducer"

const reducer = combineReducers({
  newsList: newsListReducer,
  filterList: filterListReducer,
})

const initialState = {}

const middileware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middileware))
)

export default store
