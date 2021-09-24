import React, { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import Loading from "../components/layouts/Loading"
import NewsList from "../components/news/NewsList"
import News from "../components/news/News"
import {
  latestNews,
  getNewsCategories,
  getNewsSource,
} from "../actions/newsActions"

const HomeScreen = ({ match, history }) => {
  const dispatch = useDispatch()
  const newsList = useSelector((state) => state.newsList)
  const { loading, sources, categories } = newsList

  console.log(sources)
  console.log(categories)

  const newsId = match.params.id

  useEffect(() => {
    dispatch(latestNews())
    dispatch(getNewsSource())
    dispatch(getNewsCategories())

    history.push("/")
  }, [dispatch, history])

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
