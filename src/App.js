
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
      <h1>Tao Dep Trai VCL</h1>
    <h2>Tao moi dep trai dmm</h2>
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
