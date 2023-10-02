/* eslint-disable */

import { useLocation, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const BlogDetail = () => {
  // const location = useLocation();
  // const pathname = location.pathname.split("/")[3];

  // console.log(location, pathname);
  const { id } = useParams();

  return (
    <div>
      <Helmet>
        <title>Blog {id} post</title>
      </Helmet>
      BlogDetail: <span style={{ fontWeight: "bold", color: "red" }}>{id}</span>{" "}
    </div>
  );
};

export default BlogDetail;
