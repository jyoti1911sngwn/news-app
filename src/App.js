import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

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
    <div className="App">
      <div className='grid'>
      {list .map((val, idx)=>(
        // <div>{val.urlToImage}</div>
        <div className="card" style={{ width: "18rem" }}>
        <img src={val?.urlToImage} className="card-img-top" height={"200px"} width={'350px'} alt="..." />
        <div className="card-body">
          <h5 className="card-title">{val.title}</h5>
          <p className="card-text">{val.content}</p>
          <a href={val.url} className="btn btn-primary">See More...</a>
        </div>
      </div>
      ))} 
      </div>
     
    </div>
  );
}

export default App;