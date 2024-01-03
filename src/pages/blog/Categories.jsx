import { useParams } from "react-router-dom";

const Categories = () => {
  const params = useParams();

  console.log(params);

  return <div>Blog Categories</div>;
};

export default Categories;
