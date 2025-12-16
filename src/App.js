import './App.css';
import { Routes, Route, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import NewsList from './NewsList';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<NewsList />} />
        <Route path="/:category" element={<NewsList />} />
      </Routes>
    </>
  );
}

export default App;
