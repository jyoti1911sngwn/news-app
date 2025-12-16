import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const NewsList = ({setProgress , page , setPage}) => {
  const { category } = useParams(); 
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchdata = async () => {
    setLoading(true)
    setProgress(30)
    const data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&page=${page}&pageSize=9&apiKey=be86f4663b6a4df1905eefd41ba43afd`
    );
    setProgress(60)
    const res = await data.json();
    setList(res.articles || []);
    setProgress(100)
    setLoading(false)
    setTimeout(() => setProgress(0), 300);
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
