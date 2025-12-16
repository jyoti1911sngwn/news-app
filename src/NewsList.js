import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const NewsList = ({setProgress , page , setPage}) => {
  const { category } = useParams(); 
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

const fetchdata = async () => {
  try {
    setLoading(true);
    setProgress(30);
    // const res = await fetch(`/api/news?category=entertainment&page=1`);
    // const res = await fetch(`https://api.thenewsapi.com/news/headlines?locale=us&language=en&category=${category}&page=${page}&pageSize=9&apiKey=${process.env.NEWS_API_KEY}`)
    const res = await fetch(`https://api.thenewsapi.com/v1/news/headlines?locale=us&language=en&apiKey=zvPCeSPYIeJEvehpn9UaT2QrfnL6JuJWjdwRAnAd`)
    const data = await res.json();

    console.log(data); // Debug: check if articles are coming

    setList(data.articles || []);
    setProgress(100);
  } catch (err) {
    console.error("Failed to fetch news:", err);
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
        {list.map((val, idx) => (
          <div className="col-12 col-sm-6 col-md-4" key={idx}>
            <div className="card h-100">
              <img
                src={val.urlToImage || "https://library.ceu.edu/wp-content/uploads/news-2444778_960_720.jpg"}
                className="card-img-top"
                alt="news"
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{val.title}</h5>
                <p className="card-text">{val.content}</p>
                <a
                  href={val.url}
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
