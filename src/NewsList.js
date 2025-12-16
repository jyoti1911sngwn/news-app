import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const NewsList = ({setProgress}) => {
  const { category } = useParams(); 
  const [list, setList] = useState([]);

  const fetchdata = async () => {
    setProgress(30)
    const data = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=be86f4663b6a4df1905eefd41ba43afd`
    );
    setProgress(60)
    const res = await data.json();
    setList(res.articles || []);
    setProgress(100)
    setTimeout(() => setProgress(0), 300);
  };

  useEffect(() => {
    fetchdata();
  }, [category]); 

  return (
    <div className="container mt-5 pt-4">
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
      </div>
    </div>
  );
};


export default NewsList
