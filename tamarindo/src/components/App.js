import { Component } from "react";
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom';

import Home from "./Home";
import Dashboard from "./Dashboard";
import NotFound from "./NotFound";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
          <hr></hr>
          <Routes>
            <Route index path="/" element={<Home />}></Route>
            <Route path="dashboard" element={<Dashboard />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;