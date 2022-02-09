import React, { useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";

const App = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "JavaScript",
      body: "JavaScript is programming language",
    },
    {
      id: 2,
      title: "C#",
      body: "C# is programming language",
    },
    {
      id: 3,
      title: "Java",
      body: "Java is programming language",
    },
  ]);

  return (
    <div className="App">
      <form action="">
        <input type="text" placeholdet="Title of the post" />
        <input type="text" placeholdet="Description of the post" />
        <MyButton>Create post</MyButton>
      </form>
      <PostList posts={posts} title="List" />
    </div>
  );
};

export default App;
