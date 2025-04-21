import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";

const PostDetails = () => {
  const params = useParams();
  const [searchParams] = useSearchParams();
  console.log("Search Params:", searchParams.get("id"));
  console.log("Search Params:", searchParams.get("name"));
  console.log("Search Params:", searchParams.get("age"));

  const { postId } = params;
  console.log("Post ID:", postId);

  useEffect(() => {
    console.log("Post ID:", postId);
  }, [postId]);

  return (
    <div>
      <h1>Post Detail</h1>
      <p>This is the post detail of post {postId}</p>
    </div>
  );
};

export default PostDetails;
