import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const PostForm = ({ create }) => {
  // const [title, setTitle] = useState("");
  // const bodyInputRef = useRef();
  // const [description, setDescription] = useState("");
  const [post, setPost] = useState({ title: "", description: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: "", description: "" });
  };

  return (
    <form action="">
      {/* controlled element */}
      <MyInput
        value={post.title}
        // onChange={(e) => setTitle(e.target.value)}
        onChange={(e) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholdet="Title of the post"
      />
      <MyInput
        value={post.description}
        // onChange={(e) => setDescription(e.target.value)}
        onChange={(e) => setPost({ ...post, description: e.target.value })}
        type="text"
        placeholdet="Description of the post"
      />
      {/* uncontrolled element
  <MyInput
    ref={bodyInputRef}
    type="text"
    placeholdet="Description of the post"
  /> */}
      <MyButton onClick={addNewPost}>Create post</MyButton>
    </form>
  );
};

export default PostForm;
