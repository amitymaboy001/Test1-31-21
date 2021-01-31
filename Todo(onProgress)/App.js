import React, { useEffect, useState } from 'react';
import './App.css';

import Navbar from './Navbar';
import Input from './Input';
import Post from './Post';
import Button from "@material-ui/core/Button";


let id = 1;



function App() {
  const [posts, setPosts] = useState([]);

  // // useState
  // const [rgb, setRgb] = useState([0, 0, 0]);
  // const[count , setCount] = useState(0);

  function addPost(title) {
    const newPost = { id, title };
    setPosts([newPost, ...posts]);
    id += 1;
  }

  function deletePost(id) {
    const updatePosts = posts.filter((post) => post.id !== id);
    setPosts(updatePosts);
  }

  return (
    <div className="App">
      <Navbar />
      {/* <p className="rgb">Random RGB: {rgb.join(',')}</p>
      <button onClick={() => {
        setRgb(rgb.map(() => {
          return Math.floor(Math.random() * 256)
        }))
      }}>Random</button>
      <p>{count}</p>
      <button onClick={()=>setCount(count+1)}>incret</button> */}
      <Input addPost={addPost} />
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          deletePost={deletePost}
        />
      ))}
    </div>
  );
}

export default App;
