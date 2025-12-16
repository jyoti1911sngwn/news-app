import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const NewsList = ({setProgress , page , setPage}) => {
  const { category } = useParams(); 
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const articlesPerPage = 9;
const startIndex = (page - 1) * articlesPerPage;
const paginatedArticles = list.slice(startIndex, startIndex + articlesPerPage);
const fetchdata = async () => {

  try {
    setLoading(true);
    setProgress(30);

    // Use category if exists, otherwise fallback to q=news
    const queryCategory = category || "top"; // default to top
    const res = await fetch(
      `https://newsdata.io/api/1/latest?apikey=pub_bad711916c2b47dc922911dc8f4e18c9&language=en&category=${queryCategory}`
    );

    const data = await res.json();

    if (data.status === "error") {
      console.error("NewsData API error:", data.results?.message || data.message);
      setList([]);
    } else {
      setList(Array.isArray(data.results) ? data.results : []);
    }

    setProgress(100);
  } catch (err) {
    console.error("Failed to fetch news:", err);
    setList([]);
  } finally {
    setLoading(false);
    setTimeout(() => setProgress(0), 300);
  }
};




  useEffect(() => {
    fetchdata();
  }, [category, page]); 

  return (
    <div className="container mt-5 pt-4 mb-5">
    {loading ? (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "60vh" }}>
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    ) : (
      <div className="row g-4">
        {paginatedArticles.map((val, idx) => (
          <div className="col-12 col-sm-6 col-md-4" key={idx}>
            <div className="card h-100">
              <img
                src={val.image_url || "https://library.ceu.edu/wp-content/uploads/news-2444778_960_720.jpg"}
                className="card-img-top"
                alt="news"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{val.title}</h5>
                <p className="card-text">{val.content}</p>
                <a
                  href={val.link}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-primary mt-auto"
                >
                  See More...
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>)}  
    </div>
  );
};


export default NewsList
