import "bootstrap/dist/css/bootstrap.min.css"
import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Navbar from "./components/layouts/Navbar"
import HomeScreen from "./screens/HomeScreen"
import ScrollTop from "./components/layouts/ScrollTop"
import { getNewsCategories, getNewsSource } from "./actions/newsActions"

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getNewsSource())
    dispatch(getNewsCategories())
  }, [])
  return (
    <Router>
      <ScrollTop />
      <Navbar />
      <Route path="/:id?" component={HomeScreen} />
    </Router>
  )
}

export default App
