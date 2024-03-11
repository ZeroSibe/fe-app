import { useEffect, useState } from "react";
import React from "react";
import { getAllArticles } from "../api";
import ArticleCard from "./ArticleCard";
import Loading from "./Loading";

export default function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getAllArticles()
      .then((res) => {
        const articles = res.data.articles;
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <section>
        <ul>
          {articles.map((article) => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        </ul>
      </section>
    </div>
  );
}
