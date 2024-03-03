
export default function Post({ post }: any) {
  const { id, title, body } = post;
  return (
    <div>
      <h2>
      </h2>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
}
