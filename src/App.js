import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Navbar from "./components/layouts/Navbar"
import HomeScreen from "./screens/HomeScreen"

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/:id?" component={HomeScreen} />
    </Router>
  )
}

export default App
