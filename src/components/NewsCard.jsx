import '../styles/NewsCard.css';

const NewsCard = ({title, srcName, author, date, description,  urlToImage, url}) => {

  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-1 py-1" style={{ maxWidth: "340px" }}>
      {urlToImage && (
        <img src={urlToImage} className="news-img card-img-top" alt="News" />
      )}
      <div className="card-body">
        <p className="news-title card-title fw-bold fs-5">{title}</p>
        <p className="news-author card-text">{author} - {srcName}</p>
        <p className="news-description card-text">{description}</p>
        <div className="d-flex justify-content-between align-items-center mt-auto">
          <a href={url} className="btn btn-primary fw-semibold text-black">Read More</a>
          <p className="news-date card-text mb-0">{date.slice(0,10)}</p>
        </div>
      </div>
    </div>
  );
  
}


export default NewsCard
