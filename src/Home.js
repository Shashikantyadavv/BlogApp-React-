import React from "react";
import Feed from './Feed.js';
import { useContext } from "react";
import DataContext from './context/DataContext'

const Home = () => {
  const {posts} = useContext(DataContext);
  return (
    <main className="Home">
      {posts.length > 0 ? (<Feed posts={posts} />) : (
      <p style={{ marginTop: "2rem" }}> No Posts to Display</p>)}
    </main>
  );
};

export default Home;
