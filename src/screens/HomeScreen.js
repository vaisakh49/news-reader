import React from "react"
import { useSelector } from "react-redux"
import Loading from "../components/layouts/Loading"
import NewsList from "../components/news/NewsList"
import News from "../components/news/News"

const HomeScreen = ({ match, history }) => {
  const newsList = useSelector((state) => state.newsList)
  const { loading } = newsList

  const newsId = match.params.id

  return (
    <div className="row ">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="col-4">
            <NewsList />
          </div>
          <div className="col-7 m-5">
            <News newsId={newsId} />
          </div>
        </>
      )}
    </div>
  )
}
export default HomeScreen
