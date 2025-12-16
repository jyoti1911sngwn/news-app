import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';

function App() {
  const [list , setList] = useState([])
  const fetchdata = async()=>{
    const data = await fetch("https://newsapi.org/v2/everything?q=tesla&from=2025-11-16&sortBy=publishedAt&apiKey=be86f4663b6a4df1905eefd41ba43afd")
    const res = await data.json()
    setList(res.articles)
    console.log(res.articles)
  }
  useEffect(()=>{
    fetchdata()
  },[])
return (
  <div className="App container mt-4 mb-8">
    <Navbar/>
    <div className="row g-4 mt-5">
      {list.map((val, idx) => (
        <div className="col-12 col-sm-6 col-md-4 col-lg-4 mt-16" key={idx}>
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

}

export default App;