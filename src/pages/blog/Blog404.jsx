import { Link } from "react-router-dom";
import { url } from "../../utils";

//! utils fonksiyonundaki generatePath yardımıyla artık to= diye linklerimi böyle de verebiliyorum.

const Blog404 = () => {
  return (
    <>
      <p style={{ marginBottom: "20px" }}>Aradıgın Blog bulunamadı!</p>
      <Link to={url("home.blog")} className="homebtn">
        Go to Blog Page
      </Link>
    </>
  );
};

export default Blog404;
