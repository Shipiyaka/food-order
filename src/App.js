import React, { useRef, useState } from "react";
import "./styles/App.css";
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";

const App = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "JavaScript",
      description: "JavaScript is programming language",
    },
    {
      id: 2,
      title: "C#",
      description: "C# is programming language",
    },
    {
      id: 3,
      title: "Java",
      description: "Java is programming language",
    },
  ]);

  // const addNewPost = (e) => {
  //   e.preventDefault();
  //   // const newPost = {
  //   //   id: Date.now(),
  //   //   title,
  //   //   description,
  //   // };
  //   // console.log(newPost);
  //   // setPosts([...posts, newPost]);
  //   setPosts([...posts, { ...post, id: Date.now() }]);

  //   // setTitle("");
  //   // setDescription("");
  //   // console.log(bodyInputRef.current.value);
  //   setPost({ title: "", body: "" });
  // };

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <PostForm create={createPost} />
      {posts.length ? (
        <PostList remove={removePost} posts={posts} title="List" />
      ) : (
        <h1>Posts didn't find</h1>
      )}
    </div>
  );
};

export default App;
