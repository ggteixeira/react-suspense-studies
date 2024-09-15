import { useState, Fragment } from "react";
import fetchData from "../../api/fetchData";
import "./index.css";
import "../../index.css";

interface IPost {
  title: string;
  body: string;
  id: number;
}

const Posts = () => {
  const [result, setResult] = useState(null);

  const handleFetch = () => {
    setResult(
      fetchData("https://jsonplaceholder.typicode.com/todos?_limit=10"),
    );
  };

  const renderItems = result
    ?.read()
    .map(({ title, id }: IPost) => <p key={id}>{title}</p>);

  return (
    <Fragment>
      <div className="container">
        <div onClick={handleFetch} className="button-container shadow">
          <h1>Click me to fetch</h1>
        </div>

        <div className="posts-container">{renderItems}</div>
      </div>
    </Fragment>
  );
};

export default Posts;
