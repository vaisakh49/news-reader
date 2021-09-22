import NewsList from "../components/news/NewsList"
import News from "../components/news/News"
import React from "react"

const HomeScreen = ({ match }) => {
  const newsId = match.params.id
  console.log(newsId)

  return (
    <div className="row ">
      <div className="col-4">
        <NewsList />
      </div>
      <div className="col-7 m-5">
        <News newsId={newsId} />
      </div>
    </div>
  )
}
export default HomeScreen
