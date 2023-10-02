import { Outlet } from "react-router-dom";

const BlogLayout = () => {
  return (
    <div>
      <h3>Blog Layout</h3>
      <Outlet />
    </div>
  );
};

export default BlogLayout;
