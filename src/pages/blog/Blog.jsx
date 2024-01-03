/* eslint-disable */

import { Helmet } from "react-helmet";
import { useEffect, useState } from "react";
import {
  useSearchParams,
  Link,
  useLocation,
  useParams,
  useNavigate,
} from "react-router-dom";
import { blogLinks } from "../../constants";
import { url } from "../../utils";

const Blog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("search") || "");

  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();

  // console.log("loc", location);
  // console.log("params", params);

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
      <button
        onClick={() => {
          if (!query.trim()) {
            return alert("This area cannot be empty!");
          }
          setSearchParams({
            ...Object.fromEntries([...searchParams]),
            type: "admin",
          });
        }}
      >
        SearchSet
      </button>
      <ul>
        {blogLinks.map((blog) => (
          <Link key={blog.id} to={url("home.blog.post", { id: blog.id })}>
            <li>{blog.title}</li>
          </Link>
        ))}
      </ul>
      <button onClick={() => navigate("/blog/categories")}>
        Blog Categories
      </button>
    </>
  );
};

export default Blog;
