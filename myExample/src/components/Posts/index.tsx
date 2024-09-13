import { Fragment, useState } from "react";
import fetchData from "../../api/fetchData";
import "./index.css";

const resource = fetchData(
  "https://jsonplaceholder.typicode.com/posts?_limit=5",
);

interface IPost {
  title: string;
  body: string;
  id: number;
}

const Posts = () => {
  const posts = resource.read();

  const [selectedItem, setSelectedItem] = useState(-1);

  const toggleExpand = (item: IPost) =>
    setSelectedItem(selectedItem !== -1 ? -1 : item.id);

  const renderPosts = posts.map((post: IPost) => {
    return (
      <Fragment key={post.id}>
        <div onClick={() => toggleExpand(post)} className="posts-container">
          <p>{post.title}</p>
        </div>

        {post.id === selectedItem && (
          <div className="posts-container animated.card">
            <p>{post.body}</p>
          </div>
        )}
      </Fragment>
    );
  });

  return <div>{renderPosts}</div>;
};

export default Posts;
