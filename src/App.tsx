import React, { Fragment, useEffect, useState } from "react";
import { Pagination } from "./components/pagination";
import { FilterPosts } from "./components/filterPosts";
import GlobalStyle from "./styles/globalStyles";
import PostList from "./components/postList";
import { Header } from "./styles/Header.style";
import { Container } from "./styles/Container.style";
import { IResponse } from "./interfaces/Response.type";
import { GreenText } from "./styles/Button.style";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState<IResponse[] | null>();
  const [filteredPosts, setFilteredPosts] = useState<IResponse[] | null>();
  const [error, setError] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setpostsPerPage] = useState(10);

  const childToParent = (childdata: any) => {
    setFilteredPosts((posts) => posts?.filter((post) => post.id !== childdata));
    setPosts((posts) => posts?.filter((post) => post.id !== childdata));
  };

  useEffect(() => {
    getPosts();
  }, []);

  async function getPosts() {
    const options = {
      method: "GET",
      url: "https://jsonplaceholder.typicode.com/posts",
      params: { category: "all", count: "100" },
      headers: {
        "X-RapidAPI-Key": "your-rapid-key",
        "X-RapidAPI-Host": "famous-quotes4.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function ({ data }: { data: IResponse[] }) {
        setPosts(data);
        setFilteredPosts(data);
      })
      .catch(function (error: any) {
        console.error(error);
        setError(error);
      });
  }

  const handleClick = (obj: any) => {
    setFilteredPosts(obj);
    setCurrentPage(1);
  };

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = filteredPosts?.slice(firstPostIndex, lastPostIndex);

  return (
    <Fragment>
      <GlobalStyle />
      <article>
        <Header>
          <h1>
            <GreenText>Corussoft:</GreenText> Post Web app
          </h1>
        </Header>
      </article>

      <Container>
        <FilterPosts posts={posts} handleClick={handleClick} />
        <PostList posts={currentPosts} childToParent={childToParent} />
        <Pagination
          totalPosts={filteredPosts?.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
        />
      </Container>
    </Fragment>
  );
}

export default App;
