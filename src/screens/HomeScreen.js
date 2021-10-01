import React from "react";
import { useSelector } from "react-redux";
import Loading from "../components/layouts/Loading";
import NewsList from "../components/news/NewsList";
import News from "../components/news/News";

const HomeScreen = ({ match }) => {
  const newsList = useSelector((state) => state.newsList);
  const { loading } = newsList;

  const newsId = match.params.id;

  return (
    <div className="row">
      {loading ? (
        <Loading />
      ) : (
        <>
          <div className="col-lg-4 col   news-listmedia">
            <NewsList />
          </div>
          <div className="col   m-5 newsmedia">
            <News newsId={newsId} />
          </div>
        </>
      )}
    </div>
  );
};
export default HomeScreen;
