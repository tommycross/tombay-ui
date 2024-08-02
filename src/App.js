import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>TomBay</h1>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/items/:id" element={<DetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
