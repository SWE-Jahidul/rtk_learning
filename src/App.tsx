import Post from "./components/Post";
import { useGetPostQuery } from "./features/api/apiSlice";

export default function App() {
  const { data: posts, isLoading, isError } = useGetPostQuery();
  console.log(posts);
  let content = null;

  if (isLoading) {
    content = "loading....";
  }

  if (!isLoading && isError) {
    content = "Error..";
  }
  if (!isLoading && !isError && posts?.length === 0) {
    content = "No Data Found";
  }

  if (!isLoading && !isError && posts?.length > 0) {
    content = posts.map((post:any) => <Post key={post.id} post={post} />);
  }
  return content;
}
