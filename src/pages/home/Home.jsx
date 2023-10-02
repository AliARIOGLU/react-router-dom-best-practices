import { useAuth } from "../../context/AuthContext";
import { Helmet } from "react-helmet";

const Home = () => {
  const { user } = useAuth();

  return (
    <>
      <Helmet>
        <title>Anasayfa</title>
        <meta name="description" content="anasayfa description" />
      </Helmet>
      <div>{user ? <p>Welcome {user.name}</p> : <p>Home Page</p>}</div>
    </>
  );
};

export default Home;
