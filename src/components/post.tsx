import { RedButton } from "../styles/Button.style";
import { TRow } from "../styles/Table.style";
import Modal from "./modal";

function Post({
  posts,
  getPostId,
}: {
  posts: { id: number; userId: number; title: string; body: string };
  getPostId: any;
}) {
  const data = posts?.id;

  return (
    <TRow key={posts?.id}>
      <td>{posts?.id}</td>
      <td>{posts?.userId}</td>
      <td>{posts?.title}</td>
      <td>{posts?.body}</td>
      <td>
        <Modal postId={posts?.id} />
        <RedButton onClick={() => getPostId(data)}> X </RedButton>
      </td>
    </TRow>
  );
}
export default Post;
