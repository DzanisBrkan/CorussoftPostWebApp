import { PaginationButton } from "../styles/Button.style";

export const Pagination = ({
  totalPosts,
  postsPerPage,
  setCurrentPage,
}: {
  totalPosts?: number;
  postsPerPage: number;
  setCurrentPage: any;
}) => {
  let pages = [];
  let posts = totalPosts ? totalPosts : 0;

  for (let index = 1; index < Math.ceil(posts / postsPerPage); index++) {
    pages.push(index);
  }

  return (
    <div>
      {pages.map((page, index) => {
        return (
          <PaginationButton key={index} onClick={() => setCurrentPage(page)}>
            {page}
          </PaginationButton>
        );
      })}
    </div>
  );
};
