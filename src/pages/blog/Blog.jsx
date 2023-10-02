/* eslint-disable */

import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { blogLinks } from "../../constants";
import { url } from "../../utils";

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("search") || "");

  // console.log(searchParams.get("search"));

  useEffect(() => {
    searchParams.set("search", query);

    if (!query) {
      searchParams.delete("search");
    }

    setSearchParams(Object.fromEntries([...searchParams]));
  }, [query]);

  for (const [key, value] of searchParams.entries()) {
    // console.log(key, value);
  }

  return (
    <>
      <Helmet>
        <title>Blog</title>
      </Helmet>
      <h5>Blog Sayfası</h5>
      <input
        type="text"
        defaultValue={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button onClick={() => setSearchParams({ type: "admin" })}>
        SearchSet
      </button>
      <ul>
        {blogLinks.map((blog) => (
          <Link key={blog.id} to={url("home.blog.post", { id: blog.id })}>
            <li>{blog.title}</li>
          </Link>
        ))}
      </ul>
    </>
  );
};

export default Blog;
