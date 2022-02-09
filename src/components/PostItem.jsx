import MyButton from "./UI/button/MyButton";

const PostItem = (props) => {
  return (
    <div className="post">
      <div className="post--content">
        <strong>
          {props.number}. {props.post.title}
        </strong>
        <div>{props.post.description}</div>
      </div>
      <div className="post--btns">
        <MyButton onClick={() => props.remove(props.post)}>Delete</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
