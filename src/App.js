import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./store/actions/postAction";

function App() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.dataPosts.posts);

  useEffect(() => {
    const fetchPost = async () => {
      await dispatch(getPosts());
    };
    fetchPost();
  }, [dispatch]);

  return (
    <>
      <div className="d-flex justify-content-center align-items-center min-vh-100 flex-column container">
        {posts.map(({ userId, id, title, body }, i) => {
          return (
            <div key={i} className="rounded shadow p-4 my-2">
              <p>{userId}</p>
              <p>{id}</p>
              <p>{title}</p>
              <p>{body}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
