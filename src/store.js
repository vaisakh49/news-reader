import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { newsListReducer } from "./reducers/newsReducer"
import { filterListReducer } from "./reducers/filterReducer"

const reducer = combineReducers({
  newsList: newsListReducer,
  filterList: filterListReducer,
})

const newsFromStorage = sessionStorage.getItem("news")
  ? JSON.parse(sessionStorage.getItem("news"))
  : []

const initialState = {
  newsList: {
    news: newsFromStorage,
  },
}

const middileware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middileware))
)

export default store
