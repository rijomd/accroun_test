import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Home";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route exact path="/"
            element={<Home />} />

        </Routes>
      </Router>
    </div>
  );
}


export default App;
