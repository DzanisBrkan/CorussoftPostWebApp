import React, { useState } from "react";
import { IResponse } from "../interfaces/Response.type";
import PostList from "./postList";

export const FilterPosts = ({
  posts,
  handleClick,
}: {
  posts?: IResponse[] | null;
  handleClick?: any;
}) => {
  const [selectedPosts, setSelectedPosts] = useState<IResponse[] | null>();
  const userIds = Array.from(new Set(posts?.map((post: any) => post?.userId)));
  return (
    <div>
      <select
        onChange={(event) => {
          if (event.target.value == "default") {
            setSelectedPosts(posts);
            handleClick(posts);
          } else {
            const filteredPosts = posts?.filter(
              (x: any) => x.userId == event.target.value
            );
            setSelectedPosts(filteredPosts);
            handleClick(filteredPosts);
          }
        }}
        defaultValue="default"
      >
        <option key={0} value="default">
          Izaberi User ID
        </option>
        {userIds
          ? userIds?.map((userId: any) => {
              return (
                <option key={userId} value={userId}>
                  {" "}
                  {userId}{" "}
                </option>
              );
            })
          : null}
      </select>
    </div>
  );
};

export default FilterPosts;
