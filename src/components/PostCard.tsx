interface Post {
  title: string;
  body: string;
}
export default function PostCard({ post }: { post: Post }) {
  return (
    <div>
      <h4> {post.title}</h4>
      <h4> {post.body}</h4>
    </div>
  );
}
