import './App.css';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import NewsList from './NewsList';
import ProgressBar from './ProgressBar';
import { useState } from 'react';

function App() {
    const [progress, setProgress] = useState(0);
const [page, setPage] = useState(1);

  return (
    <>
      <ProgressBar progress={progress} />
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <NewsList page={page} setPage={setPage} setProgress={setProgress} />
          }
        />
        <Route
          path="/:category"
          element={
            <NewsList page={page} setPage={setPage} setProgress={setProgress} />
          }
        />
      </Routes>
      <div
        className="d-flex justify-content-between my-4 mx-4"
        role="group"
        aria-label="Basic example"
      >
        <button
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
          type="button"
          className="btn btn-primary"
        >
          Prev
        </button>
        <button
          type="button"
          onClick={() => setPage(page + 1)}
          className="btn btn-primary"
        >
          Next
        </button>
      </div>
    </>
  );
}

export default App;


//infinite scroll
//pagination
