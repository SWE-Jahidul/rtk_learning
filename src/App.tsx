import { useState } from "react";
import PostCard from "./components/PostCard";
import { useGetPostsQuery, useNewPostMutation } from "./redux/api";

export default function App() {
  const { isLoading, data } = useGetPostsQuery("");

const [newPost] = useNewPostMutation();


  const [ title, setTitle ] = useState<string>("");
  const [body, setBody ] = useState<string>("");

  const submitHandler = (e: FormEvent<HTMLFormElement>): void =>{
    e.preventDefault();
    const post: Post = {
      title, 
      body,
      id: Math.random() *100
    }
    newPost(post)
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />

        <button> add </button>
      </form>

      {isLoading ? (
        <div> loading....</div>
      ) : (
        data?.map((i) => <PostCard key={i.id} post={i} />)
      )}
    </div>
  );
}
