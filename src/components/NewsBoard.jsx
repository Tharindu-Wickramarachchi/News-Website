import { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
import { FiAlertCircle } from "react-icons/fi";

const NewsBoard = ({ country, category, source }) => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?apiKey=${import.meta.env.VITE_NEWS_API_KEY}`;

    if (source) {
      // If a news source is selected, use the source parameter
      url += `&sources=${source}`;
    } else if (category) {
      // If a category is selected, use country and category parameters
      url += `&country=${country}&category=${category}`;
    } else {
      // Use default country and category if neither source nor category is selected
      url += `&country=${country}&category=general`; // Default category to 'general'
    }

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error fetching news: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        setArticles(data.articles || []);
        setError(null);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
        setError("We are currently unable to load articles. Please check your connection or try again later.");
        setArticles([]);
      });
  }, [country, category, source]); // Runs when country, category, or source changes

  return (
    <div>
      {/* <h1 style={{ textAlign: 'center' }}>
        <span className="fw-semibold" style={{ marginRight: '50px' }}>L A T E S T</span>
        <span className="fw-semibold" >N E W S</span>
      </h1> */}

      {error ? (
        <div 
          className="error-message text-center p-4 border border-danger rounded mx-auto" 
          style={{ 
            maxWidth: "380px", 
            backgroundColor: "#ffcccc", 
            color: "#800000", 
            fontSize: "16px", 
            lineHeight: "1.5",
            margin: "80px 0 80px 0",
            textAlign: "justify",
          }}
        >
          <FiAlertCircle style={{ fontSize: "70px" , paddingBottom:"5px"}}/>
          <h4 className="mb-3 fw-bold" style={{ fontSize: "20px" }}>Oops!</h4>
          <p>{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="btn btn-danger mt-2 fw-semibold text-black" 
            style={{ fontSize: "16px", padding: "8px 40px" }}
          >
            Retry
          </button>
        </div>
      ) : (
        <div className="d-flex flex-wrap justify-content-center">
          {articles.map((news, index) => (
            <NewsCard
              key={index}
              title={news.title ?? "No Title"}
              srcName={news.source?.name ?? "Unknown Source"}
              author={news.author ?? "Unknown Author"}
              date={news.publishedAt ?? "0000-00-00"}
              description={news.description ?? "Read the full article for more information."}
              urlToImage={news.urlToImage} 
              url={news.url ?? "#"}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default NewsBoard;
