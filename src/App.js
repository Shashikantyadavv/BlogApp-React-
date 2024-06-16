import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./Header.js";
import Nav from "./Nav.js";
import Home from "./Home.js";
import NewPost from "./NewPost.js";
import PostPage from "./PostPage.js";
import About from "./About.js";
import Missing from "./Missing.js";
import Footer from "./Footer.js";
import EditPost from "./EditPost.js";
import { DataProvider } from "./context/DataContext.js";

function App() {
  return (
    <div className="App">
      <Header title="React JS Blog" />
      <DataProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<NewPost />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="/post/:id" element={<PostPage />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Missing />} />
        </Routes>
      </DataProvider>
      <Footer />
    </div>
  );
}

export default App;
