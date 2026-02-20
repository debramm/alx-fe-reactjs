import { useParams } from "react-router-dom";

const UserPost = () => {
  const { postId } = useParams();
  return <h1>Viewing Post ID: {postId}</h1>;
};

export default UserPost;
