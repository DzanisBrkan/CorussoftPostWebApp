import Post from "./post";
import { Table, THeader } from "../styles/Table.style";
import { IResponse } from "../interfaces/Response.type";

function PostList({
  posts,
  childToParent,
}: {
  posts?: IResponse[] | null;
  childToParent: any;
}) {
  var data: any;

  const getPostId = (childdata: any) => {
    data = childdata;
  };
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <THeader>ID</THeader>
            <THeader>User ID</THeader>
            <THeader>Title</THeader>
            <THeader>Description</THeader>
            <THeader>Opts</THeader>
          </tr>
        </thead>
        <tbody onClick={() => childToParent(data)}>
          {posts?.map((posts: any) => (
            <Post key={posts?.id} posts={posts} getPostId={getPostId} />
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default PostList;