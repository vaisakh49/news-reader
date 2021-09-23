import "bootstrap/dist/css/bootstrap.min.css"
import React, { useEffect } from "react"
import { useSelector } from "react-redux"
import { BrowserRouter as Router, Route } from "react-router-dom"
import Navbar from "./components/layouts/Navbar"
import AdvanceSearchModal from "./components/custom/AdvanceSearchModal"
import HomeScreen from "./screens/HomeScreen"
import ScrollTop from "./components/layouts/ScrollTop"
import ScrollIndicator from "./components/layouts/ScrollIndicator"

function App() {
  const filterList = useSelector((state) => state.filterList)

  const { showmodal } = filterList
  useEffect(() => {
    console.log(showmodal)
  }, [showmodal])

  return (
    <Router>
      <ScrollTop />
      <Navbar />
      <AdvanceSearchModal />
      <Route path="/:id?" component={HomeScreen} />
      <ScrollIndicator />
    </Router>
  )
}

export default App
