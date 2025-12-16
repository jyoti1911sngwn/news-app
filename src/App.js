import './App.css';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import NewsList from './NewsList';
import ProgressBar from './ProgressBar';
import { useState } from 'react';

function App() {
    const [progress, setProgress] = useState(0);

  return (
    <>
    <ProgressBar progress={progress}/>
      <Navbar />
      <Routes>
        <Route path="/" element={<NewsList setProgress={setProgress} />} />
        <Route path="/:category" element={<NewsList setProgress={setProgress} />} />
      </Routes>
    </>
  );
}

export default App;


//infinite scroll
//pagination
//loader
