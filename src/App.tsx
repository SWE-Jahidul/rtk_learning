import PostCard from "./components/PostCard";
import { useGetPostsQuery } from "./redux/api";

export default function App() {
  const { isLoading, isError, isSuccess, data, error } = useGetPostsQuery("");

  return (
    <div>
      {isLoading ? (<div> loading....</div>) : data?.map((i) => (
        <PostCard key={i.id} post={i} />
      ))}
    </div>
  );
}
