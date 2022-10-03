
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route path = "/" />
        <Route path = "Services" />  
        <Route path = "AboutUs" />  
      </Routes>
      </Router>
    </div>
  );
}

export default App;
