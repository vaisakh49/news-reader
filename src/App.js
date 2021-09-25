import "bootstrap/dist/css/bootstrap.min.css"
import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Navbar from "./components/layouts/Navbar"
import AdvanceSearchModal from "./components/custom/AdvanceSearchModal"
import HomeScreen from "./screens/HomeScreen"
import ScrollTop from "./components/layouts/ScrollTop"
import ScrollIndicator from "./components/layouts/ScrollIndicator"

// import "materialize-css/dist/css/materialize.min.css"
// import M from "materialize-css/dist/js/materialize.min.js"

function App() {
  // useEffect(() => {
  //   // Auto init matirialize js
  //   M.AutoInit()
  // })
  const filterList = useSelector((state) => state.filterList)

  const { showmodal } = filterList
  useEffect(() => {
    console.log(showmodal)
  }, [showmodal])

  return (
    <Router>
      <ScrollTop />
      <Navbar />
      <Route path="/:id?" component={HomeScreen} />
      <ScrollIndicator />
    </Router>
  )
}

export default App
