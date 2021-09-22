import "bootstrap/dist/css/bootstrap.min.css"
import React from "react"
import Navbar from "./components/layouts/Navbar"
import NewsList from "./components/news/NewsList"
import News from "./components/news/News"

function App() {
  return (
    <>
      <Navbar />
      <div className="row ">
        <div className="col-3">
          <NewsList />
        </div>
        <div className="col-8 m-5">
          <News />
        </div>
      </div>
    </>
  )
}

export default App
