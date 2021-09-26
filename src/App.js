import "bootstrap/dist/css/bootstrap.min.css"
import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Navbar from "./components/layouts/Navbar"
import Alert from "./components/layouts/Alert"
import HomeScreen from "./screens/HomeScreen"
import ScrollTop from "./components/layouts/ScrollTop"
import ScrollIndicator from "./components/layouts/ScrollIndicator"
import {
  latestNews,
  getNewsCategories,
  getNewsSource,
} from "./actions/newsActions"

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    // dispatch(latestNews())
    dispatch(getNewsSource())
    dispatch(getNewsCategories())
    // console.log(sessionStorage.getItem(localStorage.getItem("news")))
  }, [dispatch])
  return (
    <Router>
      <ScrollTop />
      <Navbar />
      <Alert />
      <Route path="/:id?" component={HomeScreen} />
      <ScrollIndicator />
    </Router>
  )
}

export default App
