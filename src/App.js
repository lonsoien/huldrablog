import React from "react";
import './sass/style.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Blog from "./components/Blog"
import SinglePost from "./components/SinglePost"
import Error from "./components/Error"

function App() {
  return (
    <Router>
       <Routes>
       <Route path="/" exact element={<Blog  />} />
       <Route path="/:slug" element={<SinglePost />} />
       <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
